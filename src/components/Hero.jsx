export default function Hero() {
  return (
    <section className="relative border-b border-cream/20 bg-ink">
      {/* Web-1.0 nav bar */}
      <div className="px-3 md:px-6 pt-3 pb-2 text-[0.78rem] font-courier text-cream/75 border-b border-cream/15">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-2">
          <span className="text-cream/50">[</span>
          <a href="#" className="fan-link">home</a>
          <span className="text-cream/40">|</span>
          <a href="#discography" className="fan-link">the records</a>
          <span className="text-cream/40">|</span>
          <a href="#story" className="fan-link">the story (as I know it)</a>
          <span className="text-cream/40">|</span>
          <a href="#ephemera" className="fan-link">scrapbook</a>
          <span className="text-cream/40">|</span>
          <a href="#about" className="fan-link">about this site</a>
          <span className="text-cream/40">|</span>
          <a href="mailto:silverarcfans@protonmail.com" className="fan-link">email me</a>
          <span className="text-cream/50">]</span>
          <span className="ml-auto text-cream/45">best viewed at 1024×768</span>
        </div>
      </div>

      {/* Centered banner — straight Times bold, no design */}
      <div className="px-4 py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="font-typewriter text-[0.95rem] text-gold mb-4">
            ★ ★ ★ welcome to my fansite ★ ★ ★
          </p>
          <h1
            className="diy-h text-cream"
            style={{
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontSize: "clamp(2rem, 6vw, 4.6rem)",
              lineHeight: 1.05,
            }}
          >
            REGGIE ST. CLAIR<br />
            <span style={{ color: "#c8b8e0" }}>and the MOONLIGHTS</span>
          </h1>
          <p className="mt-5 font-courier text-cream/60 text-[0.9rem]">
            ─── an unofficial fan archive ───
          </p>
          <p className="mt-1 font-courier text-cream/45 text-[0.8rem]">
            Silver Arc Records · Detroit, MI · 1963–1971
            <span className="tag-new">UPDATED!</span>
          </p>
        </div>

        <hr className="web-hr--double max-w-[1100px] mx-auto my-10" />

        {/* Welcome text + sidebar — table-like layout */}
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 font-typewriter text-cream/85 text-[1rem] leading-[1.7]">
            <p>
              <strong className="text-cream">hi.</strong> this is the only complete
              catalog of Reggie St. Clair and the Moonlights that I've ever been
              able to put together — five 45s on Silver Arc Records between 1963
              and 1971, plus everything I've found out about the band over the
              last twenty-two years. most of it from{" "}
              <a href="#" className="fan-link">interviews</a>, dollar bins, two
              extremely patient librarians at the Detroit Public Library, and a
              spiral notebook I am 90% sure was Sterling Tate's.
            </p>
            <p className="mt-3">
              if you've never heard the band, start with{" "}
              <a href="#discography" className="fan-link"><em>Forgotten</em> (1968)</a>{" "}
              and keep going.
            </p>
            <p className="mt-3 text-cream/60">
              ─Marcus Pell, Grand Rapids MI
              <br />
              <span className="text-cream/45 text-[0.85rem]">(started this site in 2003 / broken three times since)</span>
            </p>
          </div>

          <aside className="md:col-span-5 banner-box font-courier text-[0.88rem] text-cream/75 leading-[1.55]">
            <div className="font-typewriter text-burnt text-[0.85rem] mb-2">
              ↓↓↓ READ FIRST ↓↓↓
            </div>
            <p>
              <strong className="text-cream underline">If you have any of these records</strong>
              {" "}— original pressings, promo copies, alternate label colors, anything —{" "}
              please email me. I'm trying to confirm the second pressing of{" "}
              <em>The Moment</em> exists at all.
            </p>
            <p className="mt-2">
              I'm also collecting{" "}
              <strong className="text-cream">photos, posters, ticket stubs, or radio spots</strong>
              {" "}— scans welcome.
            </p>
            <p className="mt-3">
              <span className="text-gold">→</span>{" "}
              <a href="mailto:silverarcfans@protonmail.com" className="fan-link">
                silverarcfans@protonmail.com
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
