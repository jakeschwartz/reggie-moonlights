import { motion } from "framer-motion";

export default function Sleeve({ single, hovered }) {
  return (
    <motion.div
      animate={hovered ? { rotate: -1.5, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      className="relative aspect-square w-full overflow-hidden rounded-[1px] scratches"
      style={{
        boxShadow:
          "0 22px 50px rgba(0,0,0,0.6), 0 4px 14px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(243,234,212,0.06)",
      }}
    >
      <img
        src={single.cover}
        alt={`${single.title} — Silver Arc Records ${single.catalog}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* subtle wear */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(0,0,0,0.55) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(255,255,255,0.18) 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </motion.div>
  );
}
