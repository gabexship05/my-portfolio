import BackgroundBlobs from "./components/BackgroundBlobs.jsx";

import Typewriter from "./components/Typewriter.jsx";


export default function App() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-neutral-950 text-neutral-100 font-sans">

  <BackgroundBlobs />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
  Hi, I’m{" "}
  <span className="gradient-fade">Gabriel</span>
</h1>

        <p className="mt-4 max-w-xl text-lg text-neutral-300">
  <Typewriter
    words={[
      "Cybersecurity Analyst",
      "Web Developer",
      "Electronics Techncian",
      "Music Addicted",
      "Professional GOOGLE Searcher ",
    ]}
    typingSpeed={70}
    deletingSpeed={40}
    pauseTime={900}
  />
    </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#portfolio"
            className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Electronics */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Electronics</h3>
            <p className="mt-2 text-neutral-400">
              Microcontrollers, amplifiers, filters, and embedded tinkering.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="Electronics"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
              <a
                href="/electronics"  // <— was #electronics or GitHub
                className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
                <span className="relative">View Projects</span>
                <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
              </a>
          </div>

          {/* IT */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">IT</h3>
            <p className="mt-2 text-neutral-400">
              TCP/IP, routers, wiring, and reliable infrastructure.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="IT"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
              <a
              href="https://github.com/gabexship05"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            >
              {/* gradient background shows on hover */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Cybersecurity */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Cybersecurity</h3>
            <p className="mt-2 text-neutral-400">
              Hardening, basic threat modeling, and safe-by-default setups.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="Cybersecurity"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <a
              href="https://github.com/gabexship05"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            >
              {/* gradient background shows on hover */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Web Developing */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Web Developing</h3>
            <p className="mt-2 text-neutral-400">
              Fast, modern sites with React + Tailwind and clean UX.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="Web Development"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <a
              href="https://github.com/gabexship05"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            >
              {/* gradient background shows on hover */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Music */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Music</h3>
            <p className="mt-2 text-neutral-400">
              Recommendation tools, playlists, and audio experiments.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="Music"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <a
              href="https://github.com/gabexship05"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            >
              {/* gradient background shows on hover */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Repairs & Maintenance */}
          <div className="rounded-xl bg-neutral-900 p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Repairs & Maintenance</h3>
            <p className="mt-2 text-neutral-400">
              Diagnostics, soldering, parts replacement, and upgrades.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                alt="Repairs and Maintenance"
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <a
              href="https://github.com/gabexship05"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            >
              {/* gradient background shows on hover */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-neutral-400 mb-6">Let’s collaborate or just say hi.</p>
        <a
          href="mailto:gabolion06@gmail.com"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-black font-semibold hover:scale-105 transition"
        >
          Say Hello
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Gabriel. Built with React & Tailwind.
      </footer>
    </div>
  );
}
