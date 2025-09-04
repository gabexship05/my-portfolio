// src/components/About.jsx

function Badge({ label }) {
  return (
    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-200">
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider">
          <span className="text-purple-400">ABOUT</span>{" "}
          <span className="text-purple-400/70">{`{`}</span>
        </h2>

        {/* Layout: left text • neon divider • right text */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: short intro + badges */}
          <div className="space-y-4 text-neutral-300 text-lg leading-relaxed max-w-prose">
            <p>
              I’m Gabriel — IT enthusiast, electronics tinkerer, and aspiring
              cybersecurity pro. I like turning complex problems into small,
              testable pieces and shipping things that actually work.
            </p>

            <ul className="text-base text-neutral-400 list-disc list-inside space-y-2">
              <li>Electronics: ESP32, sensors, simple PCBs, soldering.</li>
              <li>IT & Networking: TCP/IP, routers, wiring, reliability.</li>
              <li>Web: React + Vite + Tailwind for fast, clean UIs.</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Badge label="Los Angeles, CA" />
              <Badge label="English • Spanish" />
              <Badge label="Open to freelance" />
            </div>
          </div>

          {/* Neon divider */}
          <div className="relative hidden lg:block">
            <div className="w-px h-full bg-purple-400" />
            <div className="absolute -left-2 right-0 top-0 bottom-0 bg-purple-400/25 blur-2xl" />
          </div>

          {/* Right: longer story */}
          <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
            <p>
              I learn best by building. Recent work includes an automatic dog
              feeder/waterer (ESP32 + sensors) and small web tools for myself
              and friends. I enjoy clean code, simple architectures, and UIs
              that feel smooth.
            </p>
            <p>
              My current focus: deeper networking, security fundamentals, and
              polishing real-world projects that help people.
            </p>
          </div>
        </div>

        {/* Decorative closing brace */}
        <div className="mt-8 text-purple-400 text-5xl select-none">{`}`}</div>
      </div>
    </section>
  );
}
