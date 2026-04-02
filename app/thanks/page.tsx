import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせを受け付けました | 残すということ",
  description: "お問い合わせありがとうございます。",
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-xl rounded-2xl bg-neutral-100 p-10 text-center">
        <h1 className="mb-6 text-2xl font-light text-neutral-900 md:text-3xl">
          ありがとうございます！
        </h1>
        <p className="mb-6 text-base font-light leading-relaxed text-neutral-600 md:text-lg">
          お問い合わせを受け付けました。
          <br />
          内容を確認のうえ、順次ご連絡いたします。
        </p>
        <p className="mb-6 text-sm font-light leading-relaxed text-neutral-500 md:text-base">
          通常、1〜2日以内にご返信いたします。
        </p>
        <p className="mb-10 text-base font-light leading-relaxed text-neutral-600 md:text-lg">
          あなたの想いに触れられることを、
          <br />
          楽しみにしております。
        </p>
        <Link
          href="/"
          className="inline-block text-base font-light text-red-500 transition-colors hover:underline"
        >
          サイトに戻る
        </Link>
      </div>
    </div>
  );
}
