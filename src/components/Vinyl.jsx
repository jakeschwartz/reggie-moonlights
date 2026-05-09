import { motion } from "framer-motion";

const labelStyles = {
  early: {
    bg: "#0d0a08",
    accent: "#c89b3c",
    text: "#f3ead4",
    name: "SILVER ARC",
  },
  transitional: {
    bg: "#3a1d4a",
    accent: "#c84e1a",
    text: "#f3ead4",
    name: "SILVER ARC",
  },
  late: {
    bg: "#c84e1a",
    accent: "#1f0e2e",
    text: "#f3ead4",
    name: "SILVER ARC — FINAL PRESSING",
  },
};

export default function Vinyl({ era = "early", title = "", catalog = "", side = "A", size = 240 }) {
  const s = labelStyles[era];
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1a1410 0%, #0a0807 60%, #15110d 100%)",
          boxShadow:
            "inset 0 0 0 2px rgba(243,234,212,0.05), 0 12px 30px rgba(0,0,0,0.55)",
        }}
      >
        {/* grooves */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
          }}
        />
        {/* label */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center text-center px-4"
          style={{
            inset: "30%",
            background: s.bg,
            color: s.text,
            boxShadow: "0 0 0 2px rgba(243,234,212,0.07)",
          }}
        >
          <span
            className="font-display tracking-[0.3em] text-[0.55rem]"
            style={{ color: s.accent }}
          >
            {s.name}
          </span>
          <span className="font-serif italic text-[0.85rem] mt-1 leading-tight">
            {title}
          </span>
          <span className="font-display tracking-[0.25em] text-[0.5rem] mt-1 opacity-70">
            {catalog} · SIDE {side}
          </span>
          {/* center hole */}
          <span
            className="absolute rounded-full bg-ink"
            style={{ width: 8, height: 8 }}
          />
        </div>
      </motion.div>
      {/* highlight */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(243,234,212,0.12), transparent 35%)",
        }}
      />
    </div>
  );
}
