"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormErrors {
  email?: string;
  message?: string;
  agree?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [website, setWebsite] = useState(""); // ハニーポット
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitError("");

    // バリデーション
    const newErrors: FormErrors = {};
    if (!email) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!validateEmail(email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!message.trim()) {
      newErrors.message = "お問い合わせ内容は必須です";
    }
    if (!agree) {
      newErrors.agree = "個人情報の取り扱いに同意してください";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ハニーポットチェック（フロント側でもチェック）
    if (website) {
      // スパムと判断して送信しない
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name || undefined,
          company: company || undefined,
          email,
          message,
          agree,
          website: website || undefined,
        }),
      });

      if (response.ok) {
        router.push("/thanks");
      } else {
        const data = await response.json();
        if (response.status === 400) {
          setErrors(data.errors || {});
        } else {
          setSubmitError(
            "送信に失敗しました。時間をおいて再度お試しください。"
          );
        }
      }
    } catch (error) {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {submitError}
        </div>
      )}

      {/* ハニーポット（隠しフィールド） */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          お名前
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          会社名
        </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 mr-2"
          />
          <span className="text-sm text-gray-700">
            <Link
              href="/privacy"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              個人情報の取り扱い
            </Link>
            に同意する <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agree && (
          <p className="mt-1 text-sm text-red-600">{errors.agree}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}

