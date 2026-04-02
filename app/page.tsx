import type { ReactNode } from "react";
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <div className="size-full bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Documentary Hero"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-6xl md:text-8xl mb-6 tracking-wider"
            style={{ fontWeight: 300 }}
          >
            残すということ
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 tracking-wide"
            style={{ fontWeight: 300 }}
          >
            人は、何を未来に残して生きるのか。
          </p>
          <p className="text-sm tracking-widest opacity-90">
            DOCUMENTARY FILM / IN PRODUCTION
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          ABOUT
        </h2>
        <div
          className="space-y-8 text-lg md:text-xl leading-relaxed"
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

      {/* Director's Note Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          DIRECTOR&apos;S NOTE
        </h2>
        <div
          className="space-y-6 text-lg md:text-xl leading-relaxed"
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

      {/* Film Information Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          FILM INFORMATION
        </h2>
        <div className="space-y-6 text-base" style={{ fontWeight: 300 }}>
          <InfoRow label="作品名" value="残すということ" />
          <InfoRow label="監督" value="山本晃大" />
          <InfoRow label="製作" value="「残すということ」映画製作準備委員会" />
          <InfoRow label="製作会社" value="SPOTLIGHT FILMS（予定）" />
          <InfoRow label="撮影場所" value="徳島県勝浦郡勝浦町大字生名字神の木1-1" />
          <InfoRow label="製作状況" value="製作中" />
        </div>
      </section>
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="mb-6 text-sm tracking-widest text-neutral-500">
          VISUAL
        </h2>
        <p
          className="mb-12 text-base leading-relaxed text-neutral-700 md:text-lg"
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
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              勝浦の川沿いに続く桜並木
            </p>
          </div>

          <div>
            <img
              src="/visual2.jpg"
              alt="桜まつり準備"
              className="w-full h-[420px] object-cover object-[50%_30%] rounded-sm"
            />
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              桜まつりの準備が進む川辺
            </p>
          </div>

          <div>
            <img
              src="/visual3.jpg"
              alt="川に橋を作る作業"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              川に橋を設置する地域の人々
            </p>
          </div>

          <div>
            <img
              src="/visual4.jpg"
              alt="地域の作業風景"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
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
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            桜まつりスタート
          </p>
        </div>
      </section>
      {/* News Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          NEWS
        </h2>
        <div className="space-y-8" style={{ fontWeight: 300 }}>
          <NewsRow date="2026.05">
            <p>映画製作準備委員会を設立予定</p>
          </NewsRow>
          <NewsRow date="2026.03">
            <p className="mb-4">インタビュー撮影開始</p>
            <ul className="list-none space-y-3 pl-0 text-neutral-700">
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

      {/* Interview Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="mb-16 text-sm tracking-widest text-neutral-500">
          INTERVIEW
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/interview1.png"
              alt="インタビューの様子 1"
              className="w-full h-[320px] object-cover rounded-sm"
            />
          </div>
          <div>
            <img
              src="/interview2.png"
              alt="インタビューの様子 2"
              className="w-full h-[320px] object-cover rounded-sm"
            />
          </div>
          <div>
            <img
              src="/interview3.png"
              alt="インタビューの様子 3"
              className="w-full h-[320px] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          SUPPORT
        </h2>
        <div
          className="text-lg leading-relaxed space-y-8"
          style={{ fontWeight: 300 }}
        >
          <p>
            この映画は、
            <br />
            地域の記憶と未来をつなぐ試みとして制作されています。
          </p>
          <p>応援してくださる方を募集しています。</p>
          <ul className="ml-6 space-y-2">
            <li>・個人支援</li>
            <li>・協賛</li>
            <li>・スポンサー</li>
          </ul>
          <p>詳細はお問い合わせください。</p>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-6 py-32 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">
          CONTACT
        </h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-16 text-center text-sm text-neutral-500">
        <p>© 2026 「残すということ」映画製作準備委員会</p>
      </footer>
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-[200px_1fr] md:text-base">
      <span className="text-neutral-500">{label}</span>
      <span>{value}</span>
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
      <span className="mb-2 min-w-[120px] text-neutral-500 md:mb-0">
        {date}
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
