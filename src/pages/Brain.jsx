import React from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";

// --- data you can edit anytime ---
const ABILITIES = [
  // Electronics
  { name: "ESP32 (MicroPython / Wi-Fi AP)", category: "Electronics", level: 3,
    tags: ["microcontroller", "pwm", "adc", "rtc"], desc: "Control, timers, PWM, Wi-Fi AP for local web config." },
  { name: "Load cell + Instrumentation amp (TL084)", category: "Electronics", level: 3,
    tags: ["wheatstone", "adc", "opamp"], desc: "Measure mass; bridge -> TL084 gain -> ADC; filtering & calibration." },
  { name: "HC-SR04 Ultrasonic sensing", category: "Electronics", level: 3,
    tags: ["distance", "water level"], desc: "Tank/bowl level sensing; basic signal smoothing." },
  { name: "IR level gate + Pump driver", category: "Electronics", level: 3,
    tags: ["transistor", "driver"], desc: "IR detection and MOSFET/ BJT switching for pumps." },
  { name: "Servo control (SG90)", category: "Electronics", level: 3,
    tags: ["pwm", "mechanics"], desc: "Gate open/close angles; debounce and limits." },
  { name: "LCD 16×2 (4-bit mode)", category: "Electronics", level: 3,
    tags: ["parallel", "ui"], desc: "Status UI for grams/liters and timers." },
  { name: "EAGLE PCB basics", category: "Electronics", level: 2,
    tags: ["pcb", "schematic", "layout"], desc: "PSU, audio amp, IR/pump boards." },
  { name: "Soldering & repair", category: "Electronics", level: 4,
    tags: ["rework", "through-hole"], desc: "Assembly, rework and quick diagnostics." },

  // Networking / IT
  { name: "TCP/IP foundations", category: "Networking", level: 4,
    tags: ["subnets", "dhcp", "dns"], desc: "Addressing, subnets, DHCP/DNS, ICMP." },
  { name: "Routers & small LANs", category: "Networking", level: 3,
    tags: ["routing", "wiring"], desc: "Home/SOHO routing, Wi-Fi APs, cable terminations." },
  { name: "Windows admin basics", category: "IT", level: 3,
    tags: ["config", "hardening"], desc: "Users, updates, drivers, backup awareness." },
  { name: "Linux basics (Ubuntu)", category: "IT", level: 3,
    tags: ["bash", "systemctl"], desc: "CLI, services, packages, permissions." },

  // Web
  { name: "React + Vite", category: "Web", level: 3,
    tags: ["jsx", "routing"], desc: "Single-page apps, routes, components." },
  { name: "Tailwind CSS", category: "Web", level: 3,
    tags: ["utility-first", "responsive"], desc: "Design systems, responsive layouts." },
  { name: "JavaScript (ESNext)", category: "Web", level: 3,
    tags: ["async", "modules"], desc: "Modern syntax, modules, fetch/async." },
  { name: "Git & GitHub", category: "Tools", level: 3,
    tags: ["commit", "branch"], desc: "Commits, branches, PR basics, deploy with Vercel." },

  // Security
  { name: "Security hygiene & hardening (basic)", category: "Security", level: 2,
    tags: ["updates", "least-privilege"], desc: "Safe defaults, updates, password managers, MFA." },
];

// --- small helpers ---
const escapeReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(escapeReg(q), "ig");
  const parts = String(text).split(re);
  const hits = String(text).match(re);
  if (!hits) return text;
  const out = [];
  parts.forEach((p, i) => {
    out.push(p);
    if (hits[i]) out.push(<mark key={i} className="bg-purple-500/30 text-inherit rounded-sm px-0.5">{hits[i]}</mark>);
  });
  return out;
}
function score(a, q) {
  if (!q) return 0;
  const s = q.toLowerCase();
  let sc = 0;
  if (a.name.toLowerCase().includes(s)) sc += 3;
  if (a.category.toLowerCase().includes(s)) sc += 2;
  if (a.desc.toLowerCase().includes(s)) sc += 1;
  if (a.tags.some(t => t.toLowerCase().includes(s))) sc += 2;
  return sc;
}

function Level({ n }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Level ${n} of 5`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`h-2.5 w-6 rounded ${i<=n ? "bg-purple-400" : "bg-white/10"}`} />
      ))}
    </div>
  );
}

export default function Brain() {
  const [q, setQ] = React.useState("");
  const presets = ["electronics", "networking", "web", "security", "react", "esp32", "tailwind"];

  const results = React.useMemo(() => {
    if (!q) return ABILITIES;
    const s = ABILITIES
      .map(a => ({ a, sc: score(a, q) }))
      .filter(x => x.sc > 0)
      .sort((x, y) => y.sc - x.sc || x.a.name.localeCompare(y.a.name))
      .map(x => x.a);
    return s;
  }, [q]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">

        <ScrollToTop />

      <header className="px-6 max-w-5xl mx-auto py-6 flex items-center justify-between">
        <a href="/" className="text-sm text-neutral-400 hover:text-neutral-200 transition">← Back to Home</a>
        <h1 className="text-xl text-neutral-400">/brain</h1>
      </header>

      <main className="px-6 max-w-5xl mx-auto pb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider">
          <span className="text-purple-400">Search my abilities</span>
        </h2>

        {/* Search bar */}
        <div className="mt-6 relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type to search… e.g. networking, ESP32, react"
            className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-lg outline-none focus:ring-2 ring-purple-400/40"
          />
          <kbd className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400">/</kbd>
        </div>

        {/* Preset chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {presets.map(p => (
            <button
              key={p}
              onClick={() => setQ(p)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs hover:bg-white/10 transition"
            >
              {p}
            </button>
          ))}
          {q && (
            <button onClick={() => setQ("")} className="ml-2 text-xs text-neutral-400 hover:text-neutral-200">
              clear
            </button>
          )}
        </div>

        {/* Results */}
        <ul className="mt-8 grid gap-4">
          {results.map((a) => (
            <li key={a.name} className="rounded-xl bg-neutral-900 border border-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{highlight(a.name, q)}</h3>
                  <p className="text-sm text-purple-300/90">{a.category}</p>
                </div>
                <Level n={a.level} />
              </div>

              <p className="mt-2 text-neutral-300">{highlight(a.desc, q)}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {a.tags.map(t => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    className="text-xs rounded-full border border-white/10 px-2 py-1 hover:bg-white/10 transition"
                    title={`Search "${t}"`}
                  >
                    {highlight(t, q)}
                  </button>
                ))}
              </div>
            </li>
          ))}

          {/* Empty state */}
          {results.length === 0 && (
            <li className="rounded-xl border border-white/10 p-6 text-neutral-400">
              No matches. Try “react”, “esp32”, “routing”, or click a chip above.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}
