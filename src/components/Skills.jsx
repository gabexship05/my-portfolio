// src/components/Skills.jsx
function SkillItem({ label, slug, color }) {
  // slug = simpleicons id (e.g., "react", "nodedotjs")
  // color = hex without '#'
  return (
    <li className="flex items-center gap-3">
      <span
        className="inline-flex size-9 items-center justify-center rounded-lg ring-1 ring-white/10"
        style={{ backgroundColor: `#${color}20` }}
        aria-hidden="true"
      >
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt=""
          className="h-5 w-5"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="text-lg">{label}</span>
    </li>
  );
}

export default function Skills() {
  const left = [
    { label: "TypeScript", slug: "typescript", color: "3178C6" },
    { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { label: "Python", slug: "python", color: "3776AB" },
    { label: "Rust", slug: "rust", color: "000000" },
    { label: "C", slug: "c", color: "A8B9CC" },
  ];

  const right = [
    { label: "HTML", slug: "html5", color: "E34F26" },
    { label: "React", slug: "react", color: "61DAFB" },
    { label: "Node.js", slug: "nodedotjs", color: "339933" },
    { label: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    // add more if you like:
    // { label: "Git", slug: "git", color: "F05032" },
    // { label: "Vite", slug: "vite", color: "646CFF" },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider">
        <span className="text-purple-400">SKILLS</span>{" "}
        <span className="text-purple-400/70">{`{`}</span>
        <span className="sr-only">start</span>
        <span className="text-purple-400/70">{`}`}</span>
        <span className="sr-only">end</span>
      </h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: summary */}
        <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
          I like breaking complex problems into small, testable pieces and
          building maintainable systems. I’m curious, self-driven, and keep
          learning—especially around networking, security, and modern web stacks.
        </p>

        {/* Middle: neon divider (hidden on small screens) */}
        <div className="relative hidden lg:block">
          <div className="w-px h-full bg-purple-400" />
          <div className="absolute -left-2 right-0 top-0 bottom-0 bg-purple-400/25 blur-2xl" />
        </div>

        {/* Right: skills lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <ul className="space-y-4">
            {left.map((s) => <SkillItem key={s.label} {...s} />)}
          </ul>
          <ul className="space-y-4">
            {right.map((s) => <SkillItem key={s.label} {...s} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
