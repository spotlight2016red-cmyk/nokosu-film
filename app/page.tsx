import type { ReactNode } from "react";
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { PreservedWorksSection } from "./components/PreservedWorksSection";

export default function Home() {
  return (
    <div className="size-full bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center py-20 md:py-24">
        <Image
          src="/hero.jpg"
          alt="Documentary Hero"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-2xl px-5 text-center text-white sm:px-6 md:max-w-3xl lg:max-w-4xl">
          <h1
            className="mb-5 text-4xl tracking-wide sm:text-5xl sm:tracking-wider md:mb-6 md:text-7xl md:tracking-wide lg:text-8xl lg:tracking-wide"
            style={{ fontWeight: 300 }}
          >
            残すということ
          </h1>
          <p
            className="mb-5 text-xl leading-[1.9] tracking-wide md:mb-6 md:text-3xl md:leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            人は、何を未来に残して生きるのか。
          </p>
          <p
            className="mx-auto mb-6 max-w-md text-base leading-[1.95] text-white/90 md:mb-8 md:max-w-lg md:text-lg"
            style={{ fontWeight: 300 }}
          >
            これは、ただの映画上映ではなく、何を大切に生きていくのかを見つめる時間です。
          </p>
          <p className="mb-8 text-lg tracking-widest opacity-90 md:mb-10 md:text-xl">
            DOCUMENTARY FILM / IN PRODUCTION
          </p>

          <div className="rounded-2xl border-2 border-white/40 bg-white/95 px-5 py-9 text-neutral-900 shadow-xl backdrop-blur-sm sm:px-8 sm:py-10">
            <p className="mb-3 inline-block rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium tracking-widest text-white md:text-base">
              次回上映会
            </p>
            <p className="mb-2 text-lg font-medium tracking-wide text-neutral-600 md:text-xl">
              ドキュメンタリー映画『残すということ』
            </p>
            <p className="mb-6 text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
              海陽町上映会 決定
            </p>
            <div className="mb-8 space-y-2 text-left sm:text-center">
              <p className="text-xl font-semibold text-neutral-900 md:text-2xl">
                日時：2026年7月18日（土）14:00〜
              </p>
              <p className="text-lg font-medium text-neutral-800 md:text-xl">
                会場：現在調整中
              </p>
            </div>
            <p className="mb-8 text-base leading-[1.95] text-neutral-600 md:text-lg">
              詳細は決まり次第お知らせします。
            </p>
            <div className="flex flex-col items-center gap-5 sm:gap-6">
              <p className="text-lg font-medium leading-snug text-neutral-800 md:text-xl">
                上映会のお問い合わせ・お申し込みはこちら
              </p>
              <ApplyScreeningButton className="w-full sm:max-w-md" emphasis />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-4xl px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
          ABOUT
        </h2>
        <div
          className="space-y-7 text-lg leading-[2] text-neutral-800 md:space-y-8 md:text-xl md:leading-[2]"
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
      <section className="mx-auto max-w-4xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-12 md:text-xl">
          こんな方に届けたい
        </h2>
        <ul
          className="list-none space-y-5 pl-0 text-lg leading-[2] text-neutral-800 md:space-y-4 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          <li>・地域に残ってきた営みや文化に関心のある方</li>
          <li>・家族や先人から受け取ってきたものを見つめたい方</li>
          <li>・仕事や生き方の中で「何を残すか」を考えている方</li>
          <li>・静かに心に残る映画を観たい方</li>
        </ul>
      </section>

      {/* Director's Note Section */}
      <section className="mx-auto max-w-4xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
          DIRECTOR&apos;S NOTE
        </h2>
        <div
          className="space-y-7 text-lg leading-[2] text-neutral-800 md:space-y-8 md:text-xl md:leading-[2]"
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
        className="border-t border-neutral-200 bg-neutral-50/80 px-6 py-28 md:py-32"
      >
        <div className="mx-auto max-w-4xl space-y-14">
          <div className="rounded-sm border border-neutral-300 bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-neutral-500 md:text-base">
              次回上映会
            </p>
            <h3
              className="mb-2 text-xl font-medium text-neutral-800 md:text-2xl"
              style={{ fontWeight: 300 }}
            >
              ドキュメンタリー映画『残すということ』
            </h3>
            <p className="mb-8 text-2xl font-semibold tracking-wide text-neutral-900 md:text-3xl">
              海陽町上映会 決定
            </p>
            <div
              className="space-y-4 text-lg leading-[2] text-neutral-800 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              <p>
                <span className="font-semibold text-neutral-900">日時：</span>
                <span className="font-medium text-neutral-900">
                  2026年7月18日（土）14:00〜
                </span>
              </p>
              <p>
                <span className="font-semibold text-neutral-900">会場：</span>
                <span className="font-medium text-neutral-900">
                  現在調整中
                </span>
              </p>
              <p className="text-neutral-600">
                詳細は決まり次第お知らせします。
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-12 md:text-xl">
              上映会概要
            </h2>
            <p
              className="mb-8 text-base tracking-wide text-neutral-500 md:text-lg"
              style={{ fontWeight: 300 }}
            >
              勝浦町上映会（2026年5月30日開催）
            </p>
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
              <p>
                <span className="font-semibold text-neutral-900">
                  お支払い方法：
                </span>
                <span className="font-medium text-neutral-900">
                  当日現金払い／事前決済
                </span>
              </p>
              <p className="text-neutral-700">
                店頭チケットでのお申し込みも可能です。
              </p>
              <p className="text-neutral-700">
                ドキュメンタリー映画上映、上映後トーク（予定）
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center gap-6 sm:mt-14">
              <p className="text-center text-lg font-medium text-neutral-800 md:text-xl">
                この時間に参加したい方はこちら
              </p>
              <ApplyScreeningButton emphasis />
              <p className="max-w-xl text-center text-base leading-[2] text-neutral-600 md:text-lg">
                お支払いは、当日現金払い／事前決済のどちらにも対応予定です。
              </p>
              <p className="max-w-xl text-center text-base leading-[2] text-neutral-500 md:text-lg">
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

          <div className="border-t border-neutral-200 pt-14">
            <h3 className="mb-6 text-xl font-medium tracking-wide text-neutral-900 md:text-2xl">
              当日の上映会の司会が決定！
            </h3>
            <p
              className="mb-10 text-lg leading-[2] text-neutral-800 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              5月30日開催の映画上映会では、
              <br />
              同級生であり、フリーアナウンサーとして活動している松本 由里子さんに司会をお願いする予定です。
            </p>
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
              <div className="mx-auto w-full max-w-xs shrink-0 md:mx-0">
                <img
                  src="/mc-matsumoto-yuriko.png"
                  alt="フリーアナウンサー 松本由里子さん"
                  className="aspect-[3/4] w-full rounded-sm object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="min-w-0 space-y-5 text-lg leading-[2] text-neutral-800 md:text-xl"
                style={{ fontWeight: 300 }}
              >
                <div>
                  <p className="text-xl font-medium text-neutral-900 md:text-2xl">
                    松本由里子さん
                  </p>
                  <p className="mt-1 text-neutral-600">フリーアナウンサー</p>
                </div>
                <p>
                  短期大学卒業後、テレビリポーターとして四国放送やケーブルテレビの情報番組に出演。
                </p>
                <p>
                  コンサート、式典、イベント等の司会を務め、最近では岩脇桜まつり、阿南の夏祭り、アミコドーム阿波おどりフェスタのMCを担当。
                </p>
                <p>
                  勝浦町では、Standup！企画 パリ五輪女子バスケ予選「日本 vs
                  ドイツ戦」パブリックビューイング会場MCも務める。
                </p>
                <p>現在は自身のYouTubeも更新中。</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-14">
            <h3 className="mb-6 text-xl font-medium tracking-wide text-neutral-900 md:text-2xl">
              勝浦町の、やっこ連の参加決定！
            </h3>
            <p
              className="mb-10 text-lg leading-[2] text-neutral-800 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              ラストを飾っていただきます！
            </p>
            <img
              src="/yakkoren.jpg"
              alt="勝浦町 やっこ連の阿波おどり"
              className="w-full max-w-3xl rounded-sm object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Post-screening impressions */}
      <section className="border-t border-neutral-200 bg-neutral-50/40 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-14 text-center text-lg tracking-[0.2em] text-neutral-400 md:mb-20 md:text-xl"
            style={{ fontWeight: 300 }}
          >
            上映後に届いた感想
          </h2>
          <div
            className="mb-16 space-y-8 text-center text-lg leading-[2.1] text-neutral-600 md:mb-20 md:text-xl md:leading-[2.2]"
            style={{ fontWeight: 300 }}
          >
            <p>
              勝浦町での上映後、作品を観てくださった方から、ありがたい感想をいただきました。
            </p>
            <p>
              すべての人に同じように届く作品ではないかもしれません。
              <br />
              けれど、必要な人の心には、確かに届いた。
            </p>
            <p>そのことを感じさせていただける言葉でした。</p>
          </div>
          <div className="space-y-14 md:space-y-16">
            <blockquote
              className="border-l border-neutral-300/80 py-1 pl-8 md:pl-10"
              style={{ fontWeight: 300 }}
            >
              <p className="text-lg leading-[2.15] text-neutral-700 md:text-xl md:leading-[2.25]">
                1人1人取り組んでいることは異なるものの、根底にある思いは同じであることがとても伝わってきて、「残すこと」について改めて考えることのできる大変有意義な時間となりました。
              </p>
              <footer className="mt-5 text-base tracking-wide text-neutral-400 md:text-lg">
                20代 / 女性
              </footer>
            </blockquote>
            <blockquote
              className="border-l border-neutral-300/80 py-1 pl-8 md:pl-10"
              style={{ fontWeight: 300 }}
            >
              <div className="space-y-6 text-lg leading-[2.15] text-neutral-700 md:space-y-7 md:text-xl md:leading-[2.25]">
                <p>
                  先人たちの想いを受け継ぐこと。
                  <br />
                  そして、次の世代に残すこと…。
                </p>
                <p>
                  昨日は、勝浦町出身の監督・山本晃大さんの作品「残すということ」を観てきました。
                </p>
                <p>
                  ドキュメンタリー映画でしたが、地元・勝浦の名士の方々が語り部となって出演され、先人たちのさまざまな想いを次の世代に伝えるという内容でした。
                </p>
                <p>
                  河川や道路などのインフラ整備、豊かな自然を活かした桜並木などの景観づくり、また地場産業や地域信仰、さらには阿波おどりに代表される文化振興まで、多様な視点から「残すということ」への大切さが綴られました。
                </p>
                <p>
                  私がいちばん印象に残ったのは、「顔も知らない先人の方々の想いと、今を生きる私たちの想いがひとつになる瞬間がある」というコメント…。私も、阿波の歴史に興味があるため、そのコメントにとても強いシンパシーを感じました。
                </p>
                <p>
                  上映後のトークイベントや地元のやっこ連による阿波おどりも、すべてが「勝浦愛」にあふれた素晴らしい内容でした。
                </p>
              </div>
              <footer className="mt-7 text-base leading-relaxed tracking-wide text-neutral-400 md:mt-8 md:text-lg">
                竹島宣裕さん（丸福食堂 ３代目店主）
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Film Information Section */}
      <section className="mx-auto max-w-4xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
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
      <section className="mx-auto max-w-5xl px-6 py-28 md:py-32">
        <h2 className="mb-8 text-lg tracking-[0.2em] text-neutral-500 md:mb-10 md:text-xl">
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

      <PreservedWorksSection />

      {/* News Section */}
      <section className="mx-auto max-w-4xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
          NEWS
        </h2>
        <div className="space-y-8" style={{ fontWeight: 300 }}>
          <NewsRow date="2026.06">
            <div className="space-y-4">
              <p className="mb-4">海陽町上映会が決定しました</p>
              <p className="text-lg leading-relaxed text-neutral-700">
                2026年7月18日（土）14:00〜に、海陽町にて上映会を開催します。会場は現在調整中です。詳細は決まり次第お知らせします。
              </p>
            </div>
          </NewsRow>
          <NewsRow date="2026.05">
            <div className="space-y-8">
              <div>
                <p className="mb-4">勝浦町の、やっこ連の参加決定！</p>
                <p className="text-lg leading-relaxed text-neutral-700">
                  ラストを飾っていただきます！
                </p>
              </div>
              <div>
                <p className="mb-4">当日の上映会の司会が決定！</p>
                <p className="text-lg leading-relaxed text-neutral-700">
                  5月30日開催の映画上映会では、同級生であり、フリーアナウンサーとして活動している松本 由里子さんに司会をお願いする予定です。
                </p>
              </div>
              <p>映画製作準備委員会を設立予定</p>
            </div>
          </NewsRow>
          <NewsRow date="2026.04">
            <div className="space-y-8">
              <div>
                <p className="mb-4">4月7日 インタビュー撮影</p>
                <ul className="list-none space-y-3 pl-0 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  <li>・中津峰山如意輪寺 住職：山田 弘乘さま</li>
                </ul>
              </div>
              <div>
                <p className="mb-4">4月15日 インタビュー撮影</p>
                <ul className="list-none space-y-3 pl-0 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  <li>
                    ・一般社団法人 かみかつ森林環境公社
                    <br />
                    <span className="inline-block pl-[1.1em]">
                      代表理事：西 利一さま
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
      <section className="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
          INTERVIEW
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          {/* 並び: 左上=3 / 右上=2 / 左下=1 / 右下=4 / その次=5 */}
          <InterviewPhoto src="/interview3.png" alt="インタビューの様子 3" />
          <InterviewPhoto src="/interview2.png" alt="インタビューの様子 2" />
          <InterviewPhoto src="/interview1.png" alt="インタビューの様子 1" />
          <InterviewPhoto
            src="/interview4.png"
            alt="中津峰山如意輪寺 住職 山田弘乘さまのインタビュー"
          />
          <InterviewPhoto
            src="/interview5.png"
            alt="一般社団法人 かみかつ森林環境公社 代表理事 西 利一さまのインタビュー"
          />
        </div>
      </section>

      {/* Support Section */}
      <section className="mx-auto max-w-4xl border-t border-neutral-200 px-6 py-28 md:py-32">
        <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-14 md:text-xl">
          SUPPORT
        </h2>
        <div
          className="space-y-7 text-lg leading-[2] text-neutral-800 md:space-y-8 md:text-xl"
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
          <div className="space-y-4 text-neutral-700">
            <p>個人の方からも、活動へのご協賛を受け付けています。</p>
            <p>
              いただいたご支援は、上映会運営費、ゲスト謝礼、今後の映像制作・上映活動に大切に活用させていただきます。
            </p>
            <p>
              すでに個人協賛をいただいております。匿名希望のためお名前は伏せさせていただきますが、心より感謝申し上げます。
            </p>
          </div>
          <p>詳細はお問い合わせください。</p>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-4xl scroll-mt-6 border-t border-neutral-200 px-6 py-28 md:py-32"
      >
        <h2 className="mb-7 text-lg tracking-[0.2em] text-neutral-500 md:mb-9 md:text-xl">
          上映会のお申込み・お問い合わせ
        </h2>
        <p
          className="mb-5 max-w-2xl text-lg leading-[2] text-neutral-700 md:text-xl"
          style={{ fontWeight: 300 }}
        >
          上映会へのご参加希望の方は、必要事項をご記入のうえお申し込みください。
          <br />
          ご不明点のある方も、こちらからお問い合わせいただけます。
        </p>
        <p
          className="mb-12 max-w-2xl text-base leading-[2] text-neutral-600 md:text-lg"
          style={{ fontWeight: 300 }}
        >
          お申し込み後、当日現金払いまたは事前決済にてご参加いただけます。
          <br />
          事前決済をご希望の方には、別途ご案内いたします。
          <br />
          店頭チケットでのお申し込みも可能です。
        </p>
        <ContactForm />
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-6 py-28 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-9 text-lg tracking-[0.2em] text-neutral-500 md:mb-12 md:text-xl">
            よくあるご質問
          </h2>
          <dl className="space-y-9 md:space-y-10">
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
              a={
                <>
                  はい。店頭チケットでもご案内予定です。
                  <br />
                  <br />
                  居酒屋 咲楽(勝浦町)でも
                  <br />
                  お買い求め可能です。
                  <br />
                  <a
                    href="https://www.instagram.com/katuuraayu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                  >
                    https://www.instagram.com/katuuraayu/
                  </a>
                  <br />
                  <br />
                  当日、会場での受付も可能となりました！
                </>
              }
            />
          </dl>
        </div>
      </section>

      {/* Closing CTA（3箇所目：ページ下部） */}
      <section className="border-t border-neutral-200 px-6 py-28 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-6 text-lg leading-[2.05] text-neutral-800 md:text-xl md:leading-[2.05]"
            style={{ fontWeight: 300 }}
          >
            映画を観る時間にとどまらず、未来へ何を残していくのかを感じ、考える時間になればと思っています。
          </p>
          <p
            className="mb-10 text-lg leading-[2.05] text-neutral-800 md:mb-12 md:text-xl md:leading-[2.05]"
            style={{ fontWeight: 300 }}
          >
            受け取ってきたものに、あらためて光を当てる時間。
            <br />
            この映画が、あなた自身の「残すということ」を見つめるきっかけになれば嬉しいです。
          </p>
          <p className="mb-5 text-lg font-medium text-neutral-800 md:text-xl">
            上映会への参加はこちら
          </p>
          <ApplyScreeningButton emphasis />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-14 text-center text-lg text-neutral-500 md:py-16 md:text-xl">
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

function ApplyScreeningButton({
  className = "",
  emphasis = false,
}: {
  className?: string;
  emphasis?: boolean;
}) {
  return (
    <a
      href="#contact"
      className={
        "inline-flex min-h-[3.75rem] w-full max-w-md touch-manipulation items-center justify-center " +
        "rounded-full bg-neutral-900 px-8 py-5 text-lg font-medium tracking-wide text-white " +
        "shadow-[0_4px_18px_rgba(0,0,0,0.18)] ring-2 ring-neutral-900/20 transition-[transform,box-shadow,background-color] " +
        "hover:bg-neutral-800 hover:shadow-[0_6px_22px_rgba(0,0,0,0.22)] active:scale-[0.99] sm:mx-auto " +
        (emphasis
          ? "sm:min-h-[4rem] sm:px-10 sm:text-xl sm:ring-neutral-800/25 "
          : "") +
        className
      }
    >
      上映会に申し込む
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: ReactNode }) {
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
