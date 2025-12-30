import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 簡易的なレート制限（メモリベース）
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1分
const RATE_LIMIT_MAX = 5; // 1分間に5回まで

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0] || realIP || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // レート制限チェック
    const ip = getClientIP(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, message, agree, website } = body;

    // ハニーポットチェック
    if (website) {
      // スパムと判断して静かに拒否（200を返してスパムボットを騙す）
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // バリデーション
    const errors: Record<string, string> = {};
    if (!email) {
      errors.email = "メールアドレスは必須です";
    } else if (!validateEmail(email)) {
      errors.email = "正しいメールアドレスを入力してください";
    }
    if (!message || !message.trim()) {
      errors.message = "お問い合わせ内容は必須です";
    }
    if (!agree) {
      errors.agree = "個人情報の取り扱いに同意してください";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // メール送信設定の確認
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;

    if (
      !contactToEmail ||
      !smtpHost ||
      !smtpPort ||
      !smtpUser ||
      !smtpPass ||
      !smtpFrom
    ) {
      console.error("SMTP設定が不完全です。環境変数を確認してください。");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // メール送信
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpFrom,
      to: contactToEmail,
      subject: "[Adtunity] お問い合わせ",
      text: `
お問い合わせがありました。

お名前: ${name || "（未入力）"}
会社名: ${company || "（未入力）"}
メールアドレス: ${email}
お問い合わせ内容:
${message}

---
このメールは、合同会社Adtunityのお問い合わせフォームから送信されました。
      `.trim(),
      html: `
<h2>お問い合わせがありました</h2>
<p><strong>お名前:</strong> ${name || "（未入力）"}</p>
<p><strong>会社名:</strong> ${company || "（未入力）"}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>お問い合わせ内容:</strong></p>
<p style="white-space: pre-wrap;">${message}</p>
<hr>
<p style="color: #666; font-size: 12px;">
このメールは、合同会社Adtunityのお問い合わせフォームから送信されました。
</p>
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

