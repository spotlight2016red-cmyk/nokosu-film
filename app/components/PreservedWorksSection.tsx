const PRESERVED_WORKS = [
  {
    title: "勝浦町 ロマン街道＆ビッグひな祭り",
    description:
      "勝浦町に根づく人形文化と、地域の人たちの想いを記録しました。",
    youtubeUrl: "https://youtu.be/N7G_lnAHcrA",
  },
  {
    title: "藍の館（藍染）",
    description:
      "徳島に受け継がれてきた藍の文化と、手仕事に込められた記憶を記録しました。",
    youtubeUrl: "https://youtu.be/1pVHBHQjCzU",
  },
  {
    title: "丹波篠山デカンショ節",
    description:
      "土地に歌い継がれてきた民謡と、人々のつながりを記録しました。",
    youtubeUrl: "https://youtu.be/ctAVYIkGtkU",
  },
] as const;

export function PreservedWorksSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50/40 px-6 py-28 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-7 text-lg tracking-[0.2em] text-neutral-500 md:mb-9 md:text-xl">
          残したいもの
        </h2>
        <p
          className="mb-12 max-w-3xl text-lg leading-[2] text-neutral-700 md:mb-14 md:text-xl md:leading-[2]"
          style={{ fontWeight: 300 }}
        >
          これまでに取材・記録してきた映像の一部です。
          <br />
          地域に残る文化、人の営み、受け継がれてきた想いを、映像として記録してきました。
        </p>

        <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:gap-9 md:grid-cols-3 md:gap-7 lg:gap-8">
          {PRESERVED_WORKS.map((work) => (
            <li key={work.title}>
              <article className="flex h-full flex-col rounded-sm border border-neutral-200/90 bg-white/80 px-6 py-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:px-7 md:py-9">
                <h3 className="mb-4 text-xl font-medium leading-snug tracking-wide text-neutral-900 md:text-[1.35rem]">
                  {work.title}
                </h3>
                <p
                  className="mb-8 flex-1 text-lg leading-[1.95] text-neutral-700 md:text-xl md:leading-[1.95]"
                  style={{ fontWeight: 300 }}
                >
                  {work.description}
                </p>
                <PreservedWorkLink youtubeUrl={work.youtubeUrl} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PreservedWorkLink({ youtubeUrl }: { youtubeUrl: string }) {
  const hasUrl = youtubeUrl.trim().length > 0;

  if (!hasUrl) {
    return (
      <span
        className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-dashed border-neutral-300 px-6 py-4 text-center text-base text-neutral-400 md:text-lg"
        aria-disabled="true"
      >
        映像を見る
      </span>
    );
  }

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[3.25rem] w-full touch-manipulation items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-4 text-center text-base font-medium tracking-wide text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50 md:text-lg"
    >
      映像を見る
    </a>
  );
}
