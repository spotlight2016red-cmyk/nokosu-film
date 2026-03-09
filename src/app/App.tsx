export default function App() {
  return (
    <div className="size-full bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1686397140810-c9bfbc0387a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBjaGVycnklMjBibG9zc29tJTIwcml2ZXIlMjBKYXBhbnxlbnwxfHx8fDE3NzMwNDY0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Documentary Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl mb-6 tracking-wider" style={{ fontWeight: 300 }}>
            残すということ
          </h1>
          <p className="text-xl md:text-2xl mb-8 tracking-wide" style={{ fontWeight: 300 }}>
            人は、何を未来に残して生きるのか。
          </p>
          <p className="text-sm tracking-widest opacity-90">
            DOCUMENTARY FILM / IN PRODUCTION
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">ABOUT</h2>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed" style={{ fontWeight: 300 }}>
          <p>
            祖父たちは川を整え、桜並木を植え、未来に風景を残した。
          </p>
          <p>
            本作は、地域に生きた人々の営みをたどりながら<br />
            「人はなぜ未来のために動くのか」を見つめるドキュメンタリー映画である。
          </p>
        </div>
      </section>

      {/* Film Information Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">FILM INFORMATION</h2>
        <div className="space-y-6 text-base" style={{ fontWeight: 300 }}>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">作品名</span>
            <span>残すということ</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">監督</span>
            <span>山本晃大</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">製作</span>
            <span>「残すということ」映画製作準備委員会</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">製作会社</span>
            <span>SPOTLIGHT FILMS（予定）</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">撮影場所</span>
            <span>徳島県勝浦郡勝浦町大字生名字神の木1-1</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <span className="text-neutral-500">製作状況</span>
            <span>製作中</span>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">NEWS</h2>
        <div className="space-y-8" style={{ fontWeight: 300 }}>
          <div className="flex flex-col md:flex-row md:gap-12">
            <span className="text-neutral-500 mb-2 md:mb-0 min-w-[120px]">2026.03</span>
            <span>映画製作準備委員会を設立</span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12">
            <span className="text-neutral-500 mb-2 md:mb-0 min-w-[120px]">2026.04</span>
            <span>インタビュー撮影開始予定</span>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">SUPPORT</h2>
        <div className="text-lg leading-relaxed space-y-8" style={{ fontWeight: 300 }}>
          <p>
            この映画は、<br />
            地域の記憶と未来をつなぐ試みとして制作されています。
          </p>
          <p>
            応援してくださる方を募集しています。
          </p>
          <ul className="space-y-2 ml-6">
            <li>・個人支援</li>
            <li>・協賛</li>
            <li>・スポンサー</li>
          </ul>
          <p>
            詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <h2 className="text-sm tracking-widest mb-16 text-neutral-500">CONTACT</h2>
        <div className="space-y-8">
          <p className="text-lg" style={{ fontWeight: 300 }}>
            お問い合わせ
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-neutral-500 mb-2">お名前</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 pb-2 focus:border-neutral-900 outline-none bg-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-500 mb-2">メールアドレス</label>
              <input
                type="email"
                className="w-full border-b border-neutral-300 pb-2 focus:border-neutral-900 outline-none bg-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-500 mb-2">メッセージ</label>
              <textarea
                rows={6}
                className="w-full border border-neutral-300 p-4 focus:border-neutral-900 outline-none bg-transparent transition-colors resize-none"
              />
            </div>
            <button className="px-12 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
              送信
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 text-center text-sm text-neutral-500 border-t border-neutral-200">
        <p>© 2026 「残すということ」映画製作準備委員会</p>
      </footer>
    </div>
  );
}