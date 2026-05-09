import { useState } from "react";
import { motion } from "framer-motion";
import { singles } from "../data/singles";
import Sleeve from "./Sleeve";
import Vinyl from "./Vinyl";

function SingleCard({ single, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <div className="relative">
        <motion.div
          className="absolute top-0 right-0 z-0"
          animate={hovered ? { x: "38%", rotate: 6 } : { x: "8%", rotate: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 22 }}
        >
          <Vinyl
            era={single.era}
            title={single.title}
            catalog={single.catalog}
            size={230}
          />
        </motion.div>

        <div className="relative z-10">
          <Sleeve single={single} hovered={hovered} />
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-3 font-courier text-[0.78rem]">
        <span className="text-gold">{single.catalog}</span>
        <span className="text-cream/40">·</span>
        <span className="text-cream/55">{single.year}</span>
        <span className="text-cream/40">·</span>
        <span className="text-cream/55">{single.runtime}</span>
        <span className="ml-auto text-cream/35">[#{String(index + 1).padStart(2, "0")} of 05]</span>
      </div>
      <h3 className="mt-2 diy-h text-2xl md:text-3xl leading-tight">
        {single.title} <span className="text-cream/40 font-normal">({single.year})</span>
      </h3>
      <p className="mt-1 font-courier text-[0.85rem] text-cream/60">
        b/w &nbsp;<em>{single.bSide}</em>
      </p>
      <p className="mt-4 font-typewriter text-cream/75 text-[0.95rem] leading-[1.65]">
        {single.blurb}
      </p>

      {/* Marcus's annotation — looks like a typed sticky note */}
      <div className="mt-5 relative bg-cream/[0.04] border-l-2 border-burnt/70 pl-4 pr-3 py-3">
        <div className="absolute -top-2 left-3 bg-ink px-2 font-courier text-[0.62rem] tracking-[0.2em] text-burnt">
          MARCUS'S NOTE
        </div>
        <p className="font-typewriter text-[0.88rem] text-cream/70 leading-[1.6] italic">
          {single.note}
        </p>
      </div>

      <dl className="mt-5 space-y-1.5 text-[0.72rem] text-cream/45 font-courier">
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-cream/35">pressing</dt>
          <dd>{single.pressing}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-cream/35">matrix</dt>
          <dd>{single.matrix}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-cream/35">chart</dt>
          <dd>{single.chartNote}</dd>
        </div>
      </dl>
    </motion.article>
  );
}

export default function Discography() {
  return (
    <section
      id="discography"
      className="relative py-14 md:py-20 px-4 md:px-8 border-b border-cream/20"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <h2
            className="diy-h diy-h--underline inline-block"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
          >
            ★ The Records ★
          </h2>
          <p className="mt-2 font-courier text-cream/45 text-[0.78rem]">
            [section 02 of 04 · 5 singles · 4 owned by me · 1 still missing]
            <span className="tag-updated">[updated 8/13/24]</span>
          </p>
        </div>
        <div className="font-typewriter text-cream/75 text-[0.98rem] leading-[1.7] text-center max-w-2xl mx-auto mb-12">
          <p>
            Five 45s, all on Silver Arc Records, all credited to Reggie. A few
            are easy to find. One I have never held a copy of. <strong className="text-cream">I scanned
            my own pressings for these images</strong> — please don't repost without
            crediting the site.
          </p>
        </div>
        <hr className="web-hr mb-12" />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {singles.map((s, i) => (
            <SingleCard key={s.catalog} single={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
