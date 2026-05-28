const PRESERVED_WORKS = [
  {
    title: "ロマン街道＆ビッグひな祭り（勝浦町）",
    description:
      "勝浦町に根づく人形文化と、地域の人たちの想いを記録しました。",
    youtubeUrl: "https://youtu.be/N7G_lnAHcrA",
  },
  {
    title: "藍染 藍の館（藍住町）",
    description:
      "徳島に受け継がれてきた藍の文化と、手仕事に込められた記憶を記録しました。",
    youtubeUrl: "https://youtu.be/1pVHBHQjCzU",
  },
  {
    title: "丹波篠山デカンショ節（丹波篠山市）",
    description:
      "土地に歌い継がれてきた民謡と、人々のつながりを記録しました。",
    youtubeUrl: "https://youtu.be/ctAVYIkGtkU",
  },
] as const;

function getYoutubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.replace(/^\//, "").split("/")[0];
      return id || null;
    }
    if (
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

function youtubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

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
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-neutral-200/90 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <PreservedWorkThumbnail
                  title={work.title}
                  youtubeUrl={work.youtubeUrl}
                />
                <div className="flex flex-1 flex-col px-6 py-8 md:px-7 md:py-9">
                  <h3 className="mb-4 text-xl font-bold leading-snug tracking-wide text-neutral-900 md:text-[1.35rem]">
                    {work.title}
                  </h3>
                  <p
                    className="mb-8 flex-1 text-lg leading-[1.95] text-neutral-700 md:text-xl md:leading-[1.95]"
                    style={{ fontWeight: 300 }}
                  >
                    {work.description}
                  </p>
                  <PreservedWorkLink
                    youtubeUrl={work.youtubeUrl}
                    title={work.title}
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PreservedWorkThumbnail({
  title,
  youtubeUrl,
}: {
  title: string;
  youtubeUrl: string;
}) {
  const videoId = getYoutubeVideoId(youtubeUrl);
  if (!videoId) return null;

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}の映像をYouTubeで見る`}
      className="group relative block aspect-video w-full touch-manipulation overflow-hidden bg-neutral-900"
    >
      <img
        src={youtubeThumbnailUrl(videoId)}
        alt=""
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-black/15 transition group-hover:bg-black/25"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 shadow-md ring-1 ring-white/20 transition group-hover:bg-black/65 md:h-16 md:w-16">
          <PlayIcon />
        </span>
      </span>
    </a>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-0.5 h-7 w-7 fill-white md:h-8 md:w-8"
      aria-hidden
    >
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function PreservedWorkLink({
  youtubeUrl,
  title,
}: {
  youtubeUrl: string;
  title: string;
}) {
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
      aria-label={`${title}の映像をYouTubeで見る`}
      className="inline-flex min-h-[3.25rem] w-full touch-manipulation items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-4 text-center text-base font-medium tracking-wide text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50 md:text-lg"
    >
      映像を見る
    </a>
  );
}
