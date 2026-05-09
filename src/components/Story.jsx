import { motion } from "framer-motion";

const chapters = [
  {
    year: "1959–1962",
    title: "Before",
    body:
      "Silver Arc Records was incorporated above a typewriter-repair shop on Linwood Avenue. Its founder, Wendell Garrison, cut five spiritual sides and one novelty record before he ever signed a vocal group. Reggie St. Clair — born Reginald Saint-Clair Foster, raised on the east side — auditioned twice and was turned away both times. The third time, he brought a song he wrote called Warm, and a kid pianist who played it back without sheet music after one listen. The pianist was Sterling Tate. He was twenty-one years old and had a stack of paperback science fiction in the trunk of his car. (His sister told me about the trunk in 2008.)",
  },
  {
    year: "1963–1965",
    title: "The Polished Years",
    body:
      "The Moonlights recorded at Tera-Shirma in Detroit and at a former hotel ballroom in Hamtramck. The arrangements were tight, the harmonies polite, the suits matching. Reggie wore a silver tie pin that became a kind of trademark — there are three known photographs of it, all from 1964. They toured the chitlin' circuit through that summer, shared a bill with the Velvelettes, and lost what would turn out to be their only Motown signing meeting when their manager refused to surrender publishing. Four people I've spoken to over the years all believed the band was six months away from the breakthrough that never came.",
  },
  {
    year: "1966–1968",
    title: "The Tate Songs",
    body:
      "By 1966 Sterling Tate was writing nearly all of the band's material — though the labels still credited (R. St. Clair). The notebooks survived: spiral-bound, water-damaged, full of lyrics about satellites, vanished cities, signals from dying transmitters, lovers separated by impossible distances. He was reading Bradbury, Ballard, and a stolen library copy of The Drowned World. Space Elevator — pulled off the back of Warm and re-released — became their only hit, and they quietly hated it. Reggie walked out of the Swingin' Time television taping after Tate suggested they perform it 'in character, like astronauts.' Forgotten was recorded a year later in four overnight sessions. Reggie sang the lead in a single take, refused to retake it, and refused to perform it live for the rest of his career.",
  },
  {
    year: "1969–1970",
    title: "The Rift",
    body:
      "The break came during the sessions for what would have been the band's first full LP — a Tate concept record about a man receiving radio broadcasts from a future that may not arrive. (They called it the Satellite Cycle.) Reggie wanted standards, ballads, the radio. Tate wanted the cycle. They stopped speaking outside the studio. Producer H. B. Barnes — who had cut every Silver Arc record since 1962 — asked to be left off the credits. Garrison sided with Reggie, then with Tate, then with no one. Silver Arc's accountant fled to Florida with eleven months of escrow. Their distribution deal with a Cleveland indie collapsed the same week. Tate was voted out in November 1969. The label sleeves continued to credit (R. St. Clair); the publishing royalties continued to be paid to the same address. Tate disputed the credit for the rest of his life and never saw a check.",
  },
  {
    year: "1971",
    title: "Bankruptcy",
    body:
      "She Called Me was recorded in February 1971 — Reggie's deliberate corrective, a smooth-soul return to form with a twelve-piece string section. It was issued under the holding name ARC Sound Corporation as Silver Arc's distribution disintegrated. It came out the same week the label filed for Chapter 7. The pressing plant repossessed the unsold copies as collateral. Garrison lost the office on Linwood Avenue and, by year's end, the rights to the entire catalog. The Moonlights dissolved without an announcement. Reggie quit music and took a job teaching choir in Inkster. Sterling Tate moved to Los Angeles, played sessions, and died of a heart attack in 1979 at the age of forty-one. The master tapes — including the Satellite Cycle — were last logged in a foreclosed pressing-plant storage unit in Pontiac, MI, and were presumed lost for the next forty-seven years.",
  },
  {
    year: "2018–",
    title: "What we know now",
    body:
      "A climate-controlled locker (Lot 14C) was opened by an estate clearance crew in the spring of 2018. Inside were forty-six quarter-inch reels, eleven acetates, four spiral notebooks in Sterling Tate's handwriting, and the only known stereo mix of Forgotten. I have not heard those reels. I have read the inventory. There is, somewhere in the rooms behind these songs, a band that should have been bigger, a label that should have lasted, and a writer who was — by every measure I can apply — fifteen years ahead of the music his own group was willing to play. If anyone reading this has access to the 2018 inventory, please write to me. I have been waiting since 2002.",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-14 md:py-20 px-4 md:px-8 border-b border-cream/20"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <h2
            className="diy-h diy-h--underline inline-block"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
          >
            ★ The Story (As I Know It) ★
          </h2>
          <p className="mt-2 font-courier text-cream/45 text-[0.78rem]">
            [section 03 of 04 · compiled 2003–2024 · 6 chapters]
          </p>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10 font-typewriter text-cream/80 text-[1rem] leading-[1.7]">
          <p>
            They were a Motown meeting away, a hit song away, a stable label
            away. Then a writer started bringing in songs about satellites, and
            none of those things ever arrived. Here is everything I have been
            able to piece together.
          </p>
          <p className="mt-3 text-cream/55 text-[0.85rem]">
            <em>sources: Crate Quarterly #71 · Marlon Hines interviews ·
            letters from R. Garrison Jr. · my own conversations.
            I am not a journalist. this is what I think happened.</em>
          </p>
        </div>
        <hr className="web-hr mb-10" />

        {/* Table-of-contents box */}
        <div className="banner-box mb-10 max-w-2xl mx-auto">
          <div className="font-typewriter text-burnt text-[0.85rem] mb-3 text-center">
            ★ TABLE OF CONTENTS ★
          </div>
          <ol className="font-courier text-[0.88rem] text-cream/75 space-y-1 list-decimal list-inside">
            {chapters.map((c, i) => (
              <li key={c.year}>
                <a href={`#ch-${i}`} className="fan-link">
                  {c.title}
                </a>
                <span className="text-cream/40"> &nbsp;({c.year})</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {chapters.map((c, i) => (
            <motion.article
              id={`ch-${i}`}
              key={c.year}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center mb-3">
                <h3 className="diy-h diy-h--underline inline-block text-xl md:text-2xl">
                  {String(i + 1).padStart(2, "0")}. {c.title}
                </h3>
                <p className="mt-1 font-courier text-cream/45 text-[0.78rem]">
                  {c.year}
                </p>
              </div>
              <p className="font-typewriter text-cream/85 text-[1.02rem] leading-[1.78]">
                {c.body}
              </p>
              {i < chapters.length - 1 && (
                <hr className="web-hr mt-12" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
