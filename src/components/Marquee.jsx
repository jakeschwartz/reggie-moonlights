export default function Marquee() {
  return (
    <div className="border-b border-cream/15 bg-ink/80">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.72rem] font-courier text-cream/70">
        <span className="text-gold">★</span>
        <span>
          An <em className="not-italic underline decoration-dotted decoration-gold/60 underline-offset-2">unofficial</em> Reggie St. Clair &amp; the Moonlights archive
        </span>
        <span className="text-cream/30">·</span>
        <span>maintained by Marcus Pell since 2003</span>
        <span className="text-cream/30">·</span>
        <span>last updated <span className="text-moonlight">August 13, 2024</span></span>
        <span className="text-cream/30 hidden md:inline">·</span>
        <span className="hidden md:inline">
          contact: <a href="mailto:silverarcfans@protonmail.com" className="fan-link">silverarcfans@protonmail.com</a>
        </span>
        <span className="ml-auto text-cream/45">visitor #047,238</span>
      </div>
    </div>
  );
}
