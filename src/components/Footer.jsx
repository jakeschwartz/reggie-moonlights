export default function Footer() {
  return (
    <footer className="relative px-4 md:px-8 py-14 border-t border-cream/15 bg-ink/60">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-8 font-courier text-[0.82rem] text-cream/65 leading-relaxed">
        <div className="md:col-span-5">
          <div className="font-typewriter text-[0.8rem] tracking-[0.2em] text-gold mb-2">
            ★ silverarcfans.net ★
          </div>
          <p className="text-cream/70">
            an unofficial Reggie St. Clair &amp; the Moonlights archive,<br />
            maintained since 2003 by Marcus Pell (Grand Rapids, MI).
          </p>
          <p className="mt-3 text-cream/50">
            this is a fan project. I am not affiliated with the Garrison Family
            Trust, ARC Sound Corp., Numero Group, or anyone else. all images on
            this site are scans of records I personally own, except where noted.
            do not repost without credit.
          </p>
          <p className="mt-3">
            <span className="text-gold">→</span>{" "}
            <a href="mailto:silverarcfans@protonmail.com" className="fan-link">
              silverarcfans@protonmail.com
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="font-typewriter text-[0.78rem] tracking-[0.2em] text-cream/45 mb-3">
            ↳ catalog
          </div>
          <ul className="space-y-1">
            <li>SA-1023 · Warm</li>
            <li>SA-1047 · The Moment</li>
            <li>SA-1049 · Space Elevator</li>
            <li>SA-1056 · Forgotten <span className="text-burnt">[wanted]</span></li>
            <li>SA-1062 · She Called Me</li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-typewriter text-[0.78rem] tracking-[0.2em] text-cream/45 mb-3">
            ↳ webring &amp; sundries
          </div>
          <ul className="space-y-1">
            <li><a href="#" className="fan-link">[detroit lost soul webring]</a></li>
            <li><a href="#" className="fan-link">[detroit 45s forum]</a></li>
            <li><a href="#" className="fan-link">[crate quarterly back issues]</a></li>
            <li><a href="#" className="fan-link">[my other site: garrison label discog]</a></li>
          </ul>
          <div className="mt-5 text-cream/50">
            sign the <a href="#" className="fan-link">guestbook</a> · view the{" "}
            <a href="#" className="fan-link">guestbook</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto mt-10 pt-5 border-t border-cream/15 flex flex-wrap justify-between gap-3 font-courier text-[0.72rem] text-cream/40">
        <span>© 2003–2024 Marcus Pell · all original writing</span>
        <span>this site is best viewed at 1024×768 in any browser made after 2010</span>
        <span>
          <span className="bg-cream/[0.06] border border-cream/15 px-2 py-0.5 mr-1 inline-block tracking-widest text-cream/70">
            047,238
          </span>
          visitors since 2003
        </span>
      </div>
    </footer>
  );
}
