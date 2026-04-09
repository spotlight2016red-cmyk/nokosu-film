"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mojpnady";

const TICKET_INQUIRY = "チケットの申し込み";

const TICKET_MESSAGE_HINT = `枚数とお支払いをお書きください。

・枚数
・支払い方法(当日 or 事前決済)`;

export function ContactForm() {
  const router = useRouter();
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [messageFocused, setMessageFocused] = useState(false);

  const showTicketHint =
    inquiryType === TICKET_INQUIRY &&
    !message.trim() &&
    !messageFocused;

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
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm text-neutral-500">お名前</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border-b border-neutral-300 bg-transparent pb-2 outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-500">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-b border-neutral-300 bg-transparent pb-2 outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-500">
            お問い合わせ種別
          </label>
          <select
            name="type"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className="w-full border-b border-neutral-300 bg-transparent pb-2 text-neutral-900 outline-none transition-colors focus:border-neutral-900"
          >
            <option value="" disabled>
              お問い合わせ種別を選択
            </option>
            <option value="チケットの申し込み">チケットの申し込み</option>
            <option value="上映について">上映について</option>
            <option value="取材・出演について">取材・出演について</option>
            <option value="スポンサー・協力について">
              スポンサー・協力について
            </option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-500">
            メッセージ
          </label>
          <div className="relative">
            <textarea
              name="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              className="relative z-10 w-full resize-none border border-neutral-300 bg-transparent p-4 outline-none transition-colors focus:border-neutral-900"
            />
            {showTicketHint ? (
              <p
                className="pointer-events-none absolute inset-0 z-20 select-none whitespace-pre-line p-4 text-sm font-light leading-relaxed text-neutral-400"
                aria-hidden
              >
                {TICKET_MESSAGE_HINT}
              </p>
            ) : null}
          </div>
        </div>

        <input
          type="hidden"
          name="_subject"
          value="映画LPからお問い合わせが届きました"
        />

        <button
          type="submit"
          className="border border-neutral-900 px-12 py-3 text-sm transition-colors hover:bg-neutral-900 hover:text-white"
        >
          {inquiryType === TICKET_INQUIRY ? "チケットを申し込む" : "送信"}
        </button>
      </div>
    </form>
  );
}
