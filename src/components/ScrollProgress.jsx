// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const calc = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const y = window.scrollY || 0;
      setPct(scrollable > 0 ? Math.min(1, y / scrollable) : 0);
    };
    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400"
        style={{ width: `${pct * 100}%` }}
      />
    </div>
  );
}
