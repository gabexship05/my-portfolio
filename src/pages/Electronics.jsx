// src/pages/Electronics.jsx
export default function Electronics() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header / Back */}
      <header className="px-6 max-w-5xl mx-auto py-6 flex items-center justify-between">
        <a href="/" className="text-sm text-neutral-400 hover:text-neutral-200 transition">← Back to Home</a>
        <h1 className="text-xl text-neutral-400">Electronics</h1>
      </header>

      <main className="px-6 max-w-5xl mx-auto pb-24">
        <h2 className="text-4xl font-bold">Electronics Projects</h2>
        <p className="mt-3 text-neutral-400 max-w-3xl">
          A selection of builds and experiments — microcontrollers, analog circuits, and embedded systems.
        </p>

        {/* Projects list */}
        <div className="mt-10 space-y-8">

          {/* Project: Woof-matic (real) */}
          <article className="rounded-xl bg-neutral-900 border border-white/10 p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold">Woof-matic — Automatic Food & Water Dispenser</h3>
              <span className="text-xs text-neutral-400">2023–2024</span>
            </div>

            {/* Short summary */}
            <p className="mt-2 text-neutral-400">
              An ESP32-based feeder that releases precise kibble portions at scheduled times (set from a built-in Wi-Fi web page),
              and automatically refills the water bowl. It measures kibble mass with a load-cell + instrumentation amplifier,
              checks water level with an ultrasonic sensor and IR detectors, and plays a short recorded sound at mealtime.
            </p>

<div className="mt-6 flex flex-nowrap items-start gap-6">
  <img
    src="/images/woofmatic.jpg"
    alt="Woof-matic prototype dispensing kibble"
    loading="lazy"
    decoding="async"
    className="flex-none w-[clamp(160px,30vw,340px)] h-auto object-contain rounded-xl border border-white/10 bg-neutral-900/40"
  />

  <ul className="flex-1 min-w-0 text-sm text-neutral-300 list-disc list-inside space-y-1">
    <li><strong>Construction:</strong> custom PCBs (5 V PSU, instrumentation amp, audio amp, IR level + pump driver), LCD 16×2, submersible pump, SG90 servo gate.</li>
    <li><strong>Sensing:</strong> load cell (bridge → TL084 → ADC), HC-SR04 ultrasonic, IR LED water gate.</li>
    <li><strong>Control:</strong> ESP32 (RTC, PWM, ADC, Wi-Fi AP) w/ MicroPython + minute-timer.</li>
  </ul>
</div>





            {/* Detailed sections */}
            <div className="mt-6 space-y-4 text-neutral-300">
              <section>
                <h4 className="font-semibold text-neutral-100">Construction</h4>
                <p className="mt-1 text-neutral-400">
                  The system is powered by a regulated 5 V supply. Kibble mass is measured with a load-cell in a Wheatstone bridge,
                  conditioned by a TL084 instrumentation amplifier (high gain) and a non-inverting stage before the ESP32 ADC.
                  A SG90 servo briefly opens the gate to dispense and then closes it. Water level is monitored with an HC-SR04 sensor,
                  while IR LED gates detect presence in the bowl and switch a submersible pump via a transistor driver.
                  A 16×2 LCD (4-bit mode) shows grams and liters. An ISD1820 voice recorder and an LM386 amplifier play a short call sound at feeding time.
                  PCBs were designed in EAGLE (PSU, instrumentation amp, audio amp, IR/pump) and the enclosure was modeled to house all modules neatly.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-neutral-100">Technologies Used</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "ESP32 (Wi-Fi AP, RTC, PWM, ADC)",
                    "MicroPython",
                    "Load cell (bridge)",
                    "TL084 instrumentation amplifier",
                    "HC-SR04 ultrasonic sensor",
                    "IR LED level gate + transistor driver",
                    "SG90 servo",
                    "ISD1820 recorder",
                    "LM386 audio amplifier",
                    "LCD 16×2 (4-bit mode)",
                    "Custom HTML/CSS config page",
                    "EAGLE (PCB design)",
                    "5 V PSU, submersible pump",
                  ].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="font-semibold text-neutral-100">Reason / Motivation</h4>
                <p className="mt-1 text-neutral-400">
                  Many pets are over-fed or fed inconsistently. Woof-matic helps owners follow vet-advised portions by splitting
                  daily food into scheduled servings while ensuring fresh water, reducing human error and encouraging healthier routines at home.
                </p>
              </section>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/projects/electronics/Woofmatic.pdf"  // place your PDF here: public/projects/electronics/Woofmatic.pdf
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:text-black hover:shadow hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
                <span className="relative">Read PDF</span>
                <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
              {<a
                href="https://github.com/gabexship05/woofmatic"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-200 border border-white/10 hover:bg-white/10 transition"
              >
                Source Code
              </a>}
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}
