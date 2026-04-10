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
        <h1 className="text-3xl font-light text-neutral-900 md:text-4xl">
          ありがとうございます！
        </h1>
        <div className="mt-6 space-y-5">
          <p className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
            お問い合わせを受け付けました。
            <br />
            内容を確認のうえ、順次ご連絡いたします。
          </p>
          <p className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
            通常、1〜2日以内にご返信いたします。
          </p>
          <p className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
            あなたの想いに触れられることを、楽しみにしております。
          </p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-block text-lg font-light text-red-500 transition-colors hover:underline md:text-xl"
        >
          サイトに戻る
        </Link>
      </div>
    </div>
  );
}
