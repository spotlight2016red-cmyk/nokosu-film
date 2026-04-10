import type { ReactNode } from "react";
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <div className="size-full bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center py-16 md:py-24">
        <Image
          src="/hero.jpg"
          alt="Documentary Hero"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center text-white">
          <h1
            className="mb-6 text-5xl tracking-wider md:text-7xl lg:text-8xl"
            style={{ fontWeight: 300 }}
          >
            残すということ
          </h1>
          <p
            className="mb-6 text-xl leading-[1.9] tracking-wide md:text-3xl md:leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            人は、何を未来に残して生きるのか。
          </p>
          <p className="mb-10 text-lg tracking-widest opacity-90 md:text-xl">
            DOCUMENTARY FILM / IN PRODUCTION
          </p>

          <div className="rounded-2xl border border-white/20 bg-white/92 px-6 py-8 text-neutral-900 shadow-lg backdrop-blur-sm">
            <p className="mb-4 text-lg font-medium tracking-wide text-neutral-600 md:text-xl">
              上映会開催
            </p>
            <p className="mb-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
              2026年5月30日（土）
            </p>
            <p className="mb-2 text-xl font-semibold text-neutral-900 md:text-2xl">
              勝浦町人形文化交流館
            </p>
            <p className="mb-8 text-xl font-semibold text-neutral-900 md:text-2xl">
              参加費：1,500円
            </p>
            <div className="flex flex-col items-center gap-4">
              <ApplyScreeningButton className="w-full sm:max-w-md" />
              <p className="max-w-md text-center text-lg leading-relaxed text-neutral-600 md:text-xl">
                ※店頭チケットでもお申込みいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          ABOUT
        </h2>
        <div
          className="space-y-8 text-lg leading-[2] text-neutral-800 md:text-xl md:leading-[2]"
          style={{ fontWeight: 300 }}
        >
          <p>祖父たちは川を整え、桜並木を植え、未来に風景を残した。</p>
          <p>
            本作は、地域に生きた人々の営みをたどりながら
            <br />
            「人はなぜ未来のために動くのか」を見つめるドキュメンタリー映画である。
          </p>
        </div>
      </section>

      {/* Audience Section */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-12">
          こんな方に届けたい
        </h2>
        <ul
          className="list-none space-y-4 pl-0 text-lg leading-[2] text-neutral-800 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          <li>・地域に残ってきた営みや文化に関心のある方</li>
          <li>・家族や先人から受け取ってきたものを見つめたい方</li>
          <li>・仕事や生き方の中で「何を残すか」を考えている方</li>
          <li>・静かに心に残る映画を観たい方</li>
        </ul>
      </section>

      {/* Director's Note Section */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          DIRECTOR&apos;S NOTE
        </h2>
        <div
          className="space-y-8 text-lg leading-[2] text-neutral-800 md:text-xl md:leading-[2]"
          style={{ fontWeight: 300 }}
        >
          <p>
            祖父たちは、地域の未来を思い、川を整え、桜並木を植えた。
            その風景はいまも残り、春になると静かに人の心を動かしている。
          </p>
          <p>
            私はその話を聞いたとき、
            <br />
            「人は何を未来に残して生きるのか」という問いが心に残った。
          </p>
          <p>
            本作は、地域に生きた人々の営みをたどりながら、
            <br />
            見えているものだけでなく、受け継がれてきた想いや祈りにも光を当てていく。
          </p>
          <p>
            この映画が、過去と未来をつなぐ小さなきっかけになればと思っている。
          </p>
        </div>
      </section>

      {/* Screening overview + store tickets */}
      <section
        id="screening"
        className="border-t border-neutral-200 bg-neutral-50/80 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl space-y-14">
          <div>
            <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-12">
              上映会概要
            </h2>
            <div
              className="space-y-6 text-lg leading-[2] text-neutral-800 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              <p>
                <span className="font-semibold text-neutral-900">日時：</span>
                <span className="font-medium text-neutral-900">
                  2026年5月30日（土）14:00〜
                </span>
              </p>
              <p>
                <span className="font-semibold text-neutral-900">会場：</span>
                <span className="mt-1 block font-medium text-neutral-900">
                  勝浦町人形文化交流館
                </span>
                <span className="mt-1 block text-neutral-700">
                  徳島県勝浦町生名月ノ瀬35-1
                </span>
              </p>
              <p>
                <span className="font-semibold text-neutral-900">参加費：</span>
                <span className="font-medium text-neutral-900">1,500円</span>
              </p>
              <p className="text-neutral-700">
                ドキュメンタリー映画上映、上映後トーク（予定）
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-6">
              <ApplyScreeningButton />
              <p className="max-w-xl text-center text-lg leading-[2] text-neutral-600 md:text-xl">
                スマホが苦手な方は、店頭チケットでもお申込みいただけます。
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-14">
            <h3 className="mb-6 text-xl font-medium tracking-wide text-neutral-900 md:text-2xl">
              店頭チケットのご案内
            </h3>
            <div
              className="space-y-4 text-lg leading-[2] text-neutral-800 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              <p>店頭でもチケットをお求めいただけます。</p>
              <p>
                お近くの方は、勝浦町内の居酒屋「咲楽」でもご案内予定です。
              </p>
              <p>スマホ操作が苦手な方も、お気軽にご利用ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Film Information Section */}
      <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          FILM INFORMATION
        </h2>
        <div className="space-y-6 text-lg md:text-xl" style={{ fontWeight: 300 }}>
          <InfoRow label="作品名" value="残すということ" />
          <InfoRow label="監督" value="山本晃大" />
          <InfoRow label="製作" value="「残すということ」映画製作準備委員会" />
          <InfoRow label="製作会社" value="SPOTLIGHT FILMS（予定）" />
          <InfoRow label="撮影場所" value="徳島県勝浦郡勝浦町大字生名字神の木1-1" />
          <InfoRow label="製作状況" value="製作中" />
        </div>
      </section>
      <section className="px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <h2 className="mb-8 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-10">
          VISUAL
        </h2>
        <p
          className="mb-12 text-lg leading-[2] text-neutral-700 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          本作の舞台となる風景。
          <br />
          地域に残された景色と記憶を、少しずつ映像として記録している。
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <img
              src="/visual1.jpg"
              alt="勝浦の川と桜並木"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <p className="mt-3 text-lg leading-relaxed text-neutral-500 md:text-xl">
              勝浦の川沿いに続く桜並木
            </p>
          </div>

          <div>
            <img
              src="/visual2.jpg"
              alt="桜まつり準備"
              className="w-full h-[420px] object-cover object-[50%_30%] rounded-sm"
            />
            <p className="mt-3 text-lg leading-relaxed text-neutral-500 md:text-xl">
              桜まつりの準備が進む川辺
            </p>
          </div>

          <div>
            <img
              src="/visual3.jpg"
              alt="川に橋を作る作業"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <p className="mt-3 text-lg leading-relaxed text-neutral-500 md:text-xl">
              川に橋を設置する地域の人々
            </p>
          </div>

          <div>
            <img
              src="/visual4.jpg"
              alt="地域の作業風景"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <p className="mt-3 text-lg leading-relaxed text-neutral-500 md:text-xl">
              春の風景を支える手仕事
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-md md:mt-20">
          <img
            src="/visual-sakura-matsuri.png"
            alt="桜まつりの川での舟行"
            className="w-full max-h-[min(70vh,720px)] rounded-sm object-cover"
          />
          <p className="mt-3 text-lg leading-relaxed text-neutral-500 md:text-xl">
            桜まつりスタート
          </p>
        </div>
      </section>
      {/* News Section */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          NEWS
        </h2>
        <div className="space-y-8" style={{ fontWeight: 300 }}>
          <NewsRow date="2026.05">
            <p>映画製作準備委員会を設立予定</p>
          </NewsRow>
          <NewsRow date="2026.04">
            <p className="mb-4">4月7日 インタビュー撮影</p>
            <ul className="list-none space-y-3 pl-0 text-lg leading-relaxed text-neutral-700 md:text-xl">
              <li>・中津峰山如意輪寺 住職：山田 弘乘さま</li>
            </ul>
          </NewsRow>
          <NewsRow date="2026.03">
            <p className="mb-4">インタビュー撮影開始</p>
            <ul className="list-none space-y-3 pl-0 text-lg leading-relaxed text-neutral-700 md:text-xl">
              <li>・司法書士 ：山本達夫さま</li>
              <li>
                ・株式会社一鴻 代表取締役/
                <br />
                <span className="inline-block pl-[1.1em]">
                  阿波おどり未来へつなぐ実行委員長：庄野 浩司さま
                </span>
              </li>
              <li>・株式会社ナカテツ 専務取締役：笠井 武さま</li>
            </ul>
          </NewsRow>
        </div>
      </section>

      {/* Interview — 常に2列で下へ積み上がる。16:9 + object-cover で横の黒帯を切り、枠を塗りつぶす */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          INTERVIEW
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          {/* 並び: 左上=3 / 右上=2 / 左下=1 / 右下=4 */}
          <InterviewPhoto src="/interview3.png" alt="インタビューの様子 3" />
          <InterviewPhoto src="/interview2.png" alt="インタビューの様子 2" />
          <InterviewPhoto src="/interview1.png" alt="インタビューの様子 1" />
          <InterviewPhoto
            src="/interview4.png"
            alt="中津峰山如意輪寺 住職 山田弘乘さまのインタビュー"
          />
        </div>
      </section>

      {/* Support Section */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-14">
          SUPPORT
        </h2>
        <div
          className="space-y-8 text-lg leading-[2] text-neutral-800 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          <p>
            この映画は、
            <br />
            地域の記憶と未来をつなぐ試みとして制作されています。
          </p>
          <p>応援してくださる方を募集しています。</p>
          <ul className="ml-6 space-y-3">
            <li>・個人支援</li>
            <li>・協賛</li>
            <li>・スポンサー</li>
          </ul>
          <p>詳細はお問い合わせください。</p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-neutral-200 px-6 py-24 md:py-32 max-w-4xl mx-auto"
      >
        <h2 className="mb-6 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-8">
          上映会のお申込み・お問い合わせ
        </h2>
        <p
          className="mb-12 max-w-2xl text-lg leading-[2] text-neutral-700 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          上映会へのご参加希望の方は、必要事項をご記入のうえお申し込みください。
          <br />
          ご不明点のある方も、こちらからお問い合わせいただけます。
        </p>
        <ContactForm />
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-lg tracking-[0.2em] text-neutral-500 md:text-xl md:mb-12">
            よくあるご質問
          </h2>
          <dl className="space-y-10">
            <FaqItem
              q="ひとりでも参加できますか？"
              a="はい、おひとりで参加される方もいらっしゃいます。安心してお越しください。"
            />
            <FaqItem
              q="当日参加はできますか？"
              a="できる限り事前のお申込みをお願いしておりますが、空席状況により当日受付も検討します。"
            />
            <FaqItem
              q="駐車場はありますか？"
              a="会場の駐車場と隣の道の駅の駐車場をご活用ください。"
            />
            <FaqItem
              q="スマホが苦手でも申し込めますか？"
              a="はい。店頭チケットでもご案内予定です。"
            />
          </dl>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-12 text-lg leading-[2.05] text-neutral-800 md:text-xl md:leading-[2.05]"
            style={{ fontWeight: 300 }}
          >
            受け取ってきたものに、あらためて光を当てる時間。
            <br />
            この映画が、あなた自身の「残すということ」を見つめるきっかけになれば嬉しいです。
          </p>
          <ApplyScreeningButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-16 text-center text-lg text-neutral-500 md:text-xl">
        <p>© 2026 「残すということ」映画製作準備委員会</p>
      </footer>
    </div>
  );
}

function InterviewPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-sm bg-neutral-900">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ApplyScreeningButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={
        "inline-flex min-h-16 w-full max-w-md items-center justify-center rounded-full " +
        "bg-neutral-900 px-8 py-5 text-lg font-medium tracking-wide text-white shadow-sm " +
        "transition-colors hover:bg-neutral-800 sm:mx-auto " +
        className
      }
    >
      上映会に申し込む
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <dt className="mb-3 text-lg font-semibold text-neutral-900 md:text-xl">
        Q. {q}
      </dt>
      <dd
        className="pl-0 text-lg leading-[2] text-neutral-700 md:text-xl"
        style={{ fontWeight: 300 }}
      >
        A. {a}
      </dd>
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 text-lg md:grid-cols-[240px_1fr] md:text-xl">
      <span className="text-neutral-500">{label}</span>
      <span className="text-neutral-800">{value}</span>
    </div>
  );
}

type NewsRowProps = {
  date: string;
  children: ReactNode;
};

function NewsRow({ date, children }: NewsRowProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-12">
      <span className="mb-2 min-w-[120px] text-lg text-neutral-500 md:mb-0 md:text-xl">
        {date}
      </span>
      <div className="min-w-0 flex-1 text-lg leading-relaxed text-neutral-800 md:text-xl">
        {children}
      </div>
    </div>
  );
}
