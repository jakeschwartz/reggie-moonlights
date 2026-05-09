import { motion } from "framer-motion";

const quotes = [
  {
    body: "Plays like a long-distance phone call from a city that no longer exists. Forgotten alone is worth the entire reissue.",
    src: "The Reissue Reader, vol. 12 — 2019 reissue review",
    found: "found by me on a wayback-machine snapshot of thereissuereader.net, oct 2019",
  },
  {
    body: "There is a knowledge in Reggie St. Clair's voice that the rest of soul music spent the next decade trying to learn.",
    src: "Hal Vondrak, sleeve essay, 2019",
    found: "scanned from my own copy of the reissue (back cover, lower right)",
  },
  {
    body: "Sterling Tate was writing about satellites and dead transmitters in 1967. The rest of the country caught up to him in 1981 and never gave him the credit.",
    src: "Lina Reyes, Subterranean Quarterly, July 2019",
    found: "found in a stack of old issues at a Toronto bookstore in 2022. paid $4.",
  },
];

const radio = [
  {
    station: "WCHB 1440 AM",
    city: "Detroit",
    quote: "It's two in the morning and somebody out there needs this. Reggie St. Clair, ladies and gentlemen.",
    dj: "—Sweet Otis Holloway, Late Set",
    found: "from a fan's homemade airshift tape, c. 1965",
  },
  {
    station: "WJLB 1400 AM",
    city: "Detroit",
    quote: "The new one is a slow one. Don't move. Don't even breathe. Here it is.",
    dj: "—Big Eddie Tindall",
    found: "transcribed from an interview with Eddie's nephew, 2011",
  },
  {
    station: "KGFJ 1230 AM",
    city: "Los Angeles",
    quote: "From a record I keep finding in places I never put it. Silver Arc out of Detroit.",
    dj: "—King James Boudreaux",
    found: "second-hand — please email me if you have the airshift",
  },
];

const linerSnippets = [
  "Recorded at Tera-Shirma Sound Studios, Detroit · Engineer: Russ Terrana",
  "All five singles produced by H. B. Barnes for Silver Arc Records",
  "All songs credited (R. St. Clair) on the original labels — disputed by S. Tate",
  "Cover photography uncredited at original release",
  "©1963–1971 Silver Arc Music, BMI / ARC Sound Corp.",
];

export default function Ephemera() {
  return (
    <section
      id="ephemera"
      className="relative py-14 md:py-20 px-4 md:px-8 border-b border-cream/20 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <h2
            className="diy-h diy-h--underline inline-block"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
          >
            ★ My Scrapbook ★
          </h2>
          <p className="mt-2 font-courier text-cream/45 text-[0.78rem]">
            [section 04 of 04 · press, radio, liner notes]
          </p>
          <p className="mt-3 font-typewriter text-cream/65 max-w-xl mx-auto text-[0.95rem] leading-[1.65]">
            everything here either came from my own files or has a source I
            can point to. corrections welcome.
          </p>
        </div>
        <hr className="web-hr mb-10" />

        {/* Press quotes — paper card grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="paper text-ink p-6 md:p-7 relative scratches"
              style={{
                transform: `rotate(${(i - 1) * 0.7}deg)`,
                boxShadow: "0 14px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div className="absolute top-2 right-3 font-courier text-[0.6rem] text-ink/40">
                clipping №{i + 1}
              </div>
              <blockquote className="font-typewriter text-[0.98rem] leading-[1.55] text-ink/90">
                "{q.body}"
              </blockquote>
              <figcaption className="mt-4 font-courier text-[0.75rem] text-burnt">
                {q.src}
              </figcaption>
              <div className="mt-2 font-courier text-[0.65rem] text-ink/45 italic">
                ↳ {q.found}
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Radio strip */}
        <div className="border-y border-cream/15 py-10 mb-16">
          <div className="font-typewriter text-[0.78rem] tracking-[0.25em] text-gold mb-7">
            ★ on the air — 1965–1971 (what i've been able to find) ★
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {radio.map((r, i) => (
              <motion.div
                key={r.station}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="border-l border-cream/15 pl-4"
              >
                <div className="font-courier text-[0.78rem] text-moonlight">
                  {r.station} · {r.city}
                </div>
                <p className="mt-3 font-typewriter text-cream/85 text-[1rem] leading-snug">
                  "{r.quote}"
                </p>
                <p className="mt-2 font-courier text-[0.78rem] text-cream/55">{r.dj}</p>
                <p className="mt-3 font-courier text-[0.7rem] text-cream/35 italic">
                  ↳ {r.found}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Liner notes block */}
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 paper-dark p-7 md:p-10 hairline relative">
            <div className="absolute top-3 left-4 font-courier text-[0.7rem] text-gold/70">
              from the 2019 reissue liner notes (which I have)
            </div>
            <p className="mt-10 font-typewriter italic text-cream/85 text-[1.02rem] leading-[1.75]">
              "There is a particular shade of late evening — somewhere between dusk
              and the streetlights coming on — that has no proper name in English.
              Reggie St. Clair sang in that color. Sterling Tate, as it turned out,
              wrote in another color entirely: an end-of-the-world blue that the
              audiences of 1968 had no place to put. The two of them needed each
              other and could not stand each other, which is the whole story of
              this catalog in a single sentence."
            </p>
            <p className="mt-5 font-courier text-[0.78rem] text-burnt">
              — Hal Vondrak, Berkeley, CA, June 2019
            </p>
          </div>

          <div className="md:col-span-5 space-y-3 font-courier text-[0.82rem] text-cream/65">
            <div className="font-typewriter text-[0.78rem] tracking-[0.2em] text-gold mb-3">
              ★ what's printed on the labels ★
            </div>
            {linerSnippets.map((s) => (
              <div key={s} className="border-b border-cream/10 pb-2 leading-relaxed">
                {s}
              </div>
            ))}
            <div className="pt-5 font-typewriter text-cream/45 italic text-[0.85rem] leading-[1.6]">
              the master tapes (forty-six reels, eleven acetates, four spiral
              notebooks in Sterling Tate's handwriting, one quarter-inch tape with
              water damage on the leader) were recovered in spring 2018 from a
              foreclosed pressing-plant storage unit in Pontiac, MI. lot 14C. forty-
              seven years after the silver arc bankruptcy auction. I have read the
              inventory. I have not heard the reels. yet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
