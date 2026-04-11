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
      <div className="space-y-10 md:space-y-9">
        <div>
          <label className="mb-2 block text-lg text-neutral-500 md:text-xl">
            お名前
          </label>
          <input
            type="text"
            name="name"
            required
            className="min-h-14 w-full border-b border-neutral-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-neutral-900 md:text-xl"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg text-neutral-500 md:text-xl">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            required
            className="min-h-14 w-full border-b border-neutral-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-neutral-900 md:text-xl"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg text-neutral-500 md:text-xl">
            ご用件 (申し込み or お問い合わせ)
          </label>
          <select
            name="type"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="min-h-14 w-full border-b border-neutral-300 bg-transparent py-3 text-lg text-neutral-900 outline-none transition-colors focus:border-neutral-900 md:text-xl"
          >
            <option value="" disabled>
              ご用件を選択してください
            </option>
            <option value="上映会に申し込む">上映会に申し込む</option>
            <option value="問い合わせをする">問い合わせをする</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-lg text-neutral-500 md:text-xl">
            メッセージ
          </label>
          <p className="mb-3 text-lg leading-[2] text-neutral-600 md:text-xl">
            申込みの方は、参加人数をご記入ください。
            <br />
            お問い合わせの方は、ご質問内容をご記入ください。
          </p>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full resize-none border border-neutral-300 bg-transparent p-4 text-lg leading-[2] outline-none transition-colors focus:border-neutral-900 md:text-xl"
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="映画LPからお問い合わせが届きました"
        />

        <button
          type="submit"
          className="mx-auto mt-2 block min-h-16 w-full max-w-md touch-manipulation border border-neutral-900 px-12 py-5 text-center text-lg font-medium shadow-sm transition-colors hover:bg-neutral-900 hover:text-white md:text-xl"
        >
          内容を送る
        </button>
      </div>
    </form>
  );
}
