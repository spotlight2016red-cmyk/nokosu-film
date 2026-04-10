"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mojpnady";

export function ContactForm() {
  const router = useRouter();
  const [purpose, setPurpose] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        router.push("/thanks");
        return;
      }

      const data = await response.json().catch(() => null);
      console.error("Form submission failed", response.status, data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
      <div className="space-y-8">
        <div>
          <label className="mb-2 block text-base text-neutral-500">
            お名前
          </label>
          <input
            type="text"
            name="name"
            required
            className="min-h-12 w-full border-b border-neutral-300 bg-transparent py-3 text-base outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-base text-neutral-500">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            required
            className="min-h-12 w-full border-b border-neutral-300 bg-transparent py-3 text-base outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-base text-neutral-500">
            ご用件
          </label>
          <select
            name="type"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="min-h-12 w-full border-b border-neutral-300 bg-transparent py-3 text-base text-neutral-900 outline-none transition-colors focus:border-neutral-900"
          >
            <option value="" disabled>
              ご用件を選択してください
            </option>
            <option value="上映会に申し込む">上映会に申し込む</option>
            <option value="問い合わせをする">問い合わせをする</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-base text-neutral-500">
            メッセージ
          </label>
          <p className="mb-3 text-base leading-[1.85] text-neutral-600">
            申込みの方は、参加人数をご記入ください。
            <br />
            お問い合わせの方は、ご質問内容をご記入ください。
          </p>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full resize-none border border-neutral-300 bg-transparent p-4 text-base leading-[1.85] outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="映画LPからお問い合わせが届きました"
        />

        <button
          type="submit"
          className="min-h-14 border border-neutral-900 px-12 py-4 text-base font-medium transition-colors hover:bg-neutral-900 hover:text-white"
        >
          内容を送る
        </button>
      </div>
    </form>
  );
}
