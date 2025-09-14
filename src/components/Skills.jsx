// src/components/Skills.jsx
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";           // fallback icon for Assembly
import Reveal from "./Reveal.jsx";            // ← add this

function SkillItem({ label, slug, color }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className="inline-flex size-9 items-center justify-center rounded-lg ring-1 ring-white/10"
        style={{ backgroundColor: `#${color}20` }}
        aria-hidden="true"
      >
        {slug ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}/${color}`}
            alt=""
            className="h-5 w-5"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Cpu className="h-5 w-5 text-neutral-200" />
        )}
      </span>
      <span className="text-lg">{label}</span>
    </li>
  );
}

export default function Skills() {
  // 3 + 3 = 6 items total
  const left = [
    { label: "C",          slug: "c",          color: "A8B9CC" },
    { label: "Python",     slug: "python",     color: "3776AB" },
    { label: "React",      slug: "react",      color: "61DAFB" },
  ];

  const right = [
    { label: "TypeScript", slug: "typescript", color: "3178C6" },
    { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { label: "Assembly",   slug: null,         color: "9CA3AF" }, // uses CPU icon
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider">
          <span className="text-purple-400">SKILLS</span>{" "}
          <span className="text-purple-400/70">{`{`}</span>
          <span className="sr-only">start</span>
          <span className="text-purple-400/70">{`}`}</span>
          <span className="sr-only">end</span>
        </h2>
      </Reveal>

      {/* Open skills search */}
      <Reveal delay={0.05}>
        <div className="mt-4">
          <Link
            to="/brain"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-purple-400/40"
          >
            Scan my brain <span aria-hidden>↗</span>
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: summary */}
        <Reveal delay={0.1}>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
            I like breaking complex problems into small, testable pieces and
            building maintainable systems. I’m curious, self-driven, and keep
            learning—especially around networking, security, and modern web stacks.
          </p>
        </Reveal>

        {/* Middle: neon divider */}
        <Reveal delay={0.15}>
          <div className="relative hidden lg:block">
            <div className="w-px h-full bg-purple-400" />
            <div className="absolute -left-2 right-0 top-0 bottom-0 bg-purple-400/25 blur-2xl" />
          </div>
        </Reveal>

        {/* Right: skills lists with staggered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <ul className="space-y-4">
            {left.map((s, i) => (
              <Reveal key={s.label} delay={0.18 + i * 0.08}>
                <SkillItem {...s} />
              </Reveal>
            ))}
          </ul>
          <ul className="space-y-4">
            {right.map((s, i) => (
              <Reveal key={s.label} delay={0.18 + (i + left.length) * 0.08}>
                <SkillItem {...s} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
