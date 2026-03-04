"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">

      {/* Background image (animated slow zoom already set via hero-animated class) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.png"
          alt="Nalgoova background"
          className="w-full h-full object-cover hero-animated"
        />
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

      {/* Subtle bottom fade to keep form readable even on bright areas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      {/* Content */}
      <div className="min-h-screen flex items-start justify-center px-6 pt-28 md:pt-36 pb-24">
        <div className="w-full max-w-3xl text-center flex flex-col">

          {/* LOGO (bigger + luxury) */}
          <div className="fade-in-1">
            <img
              src="/images/logo.png"
              alt="Nalgoova Therapeutics"
              className="logo-luxury mx-auto h-16 md:h-20 w-auto"
            />
          </div>
          <div className="h-8 md:h-10" />

          {/* Headline */}
          <div className="fade-in-2">
            <h1 className="mt-8 text-[clamp(34px,5vw,62px)] font-semibold leading-[1.06] tracking-[-0.02em]">
            Precision Medicine for Severe Craniofacial Pain.
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-[16px] md:text-[18px] text-white/85 leading-relaxed">
              NALGOOVA THERAPEUTICS is developing a targeted, minimally invasive interventional solution for severe craniofacial pain conditions, including trigeminal neuralgia and refractory facial pain syndromes. 

              Built around a patient-centric philosophy, our approach focuses on anatomical precision and individualized procedural targeting to address localized pain pathways. 

              Positioned between long-term pharmacological management and highly invasive neurosurgical intervention, the platform is being advanced with a strong emphasis on clinical reproducibility, workflow integration within specialized pain centers, 
              and structured evidence generation.
            </p>

            <p className="mt-4 text-white/70">
              We are currently engaging with clinical partners, healthcare professionals, and strategic investors committed to advancing precision-based solutions for patients living with severe facial pain. Get in touch.
            </p>
          </div>
<div className="h-10 md:h-12" />

{/* FORM */}
<div className="mt-14 mx-auto w-full max-w-sm text-left">

  <form
    action="https://formsubmit.co/info@nalgoova.com"
    method="POST"
  >
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="New Nalgoova Landing Inquiry" />

    <select
      name="profile"
      required
      className="w-full border-b border-white/40 bg-transparent py-3 text-white focus:outline-none"
    >
      <option value="" className="text-black">I am a…</option>
      <option value="Investor" className="text-black">Investor</option>
      <option value="Healthcare Professional" className="text-black">Healthcare Professional</option>
      <option value="Patient / Relative" className="text-black">Patient / Relative</option>
    </select>

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="mt-8 w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:outline-none"
    />

    <textarea
      name="message"
      placeholder="Message"
      rows="3"
      required
      className="mt-8 w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:outline-none"
    />

<label className="mt-6 flex items-start gap-3 text-xs text-white/70">
  <input
    type="checkbox"
    name="consent"
    required
    className="mt-1"
  />
  <span>
    I consent to the processing of my personal data for the purpose of responding to my inquiry in accordance with the
    <a href="/privacy" className="underline ml-1">Privacy Policy</a>.
  </span>
</label>

    <button
      type="submit"
      className="mt-10 w-full rounded-full border border-white/50 py-3 font-semibold transition hover:bg-white hover:text-black"
    >
      Request Information
    </button>
  </form>

</div>

          {/* Disclaimer */}
          <div className="fade-in-4">
            <p className="mt-10 text-xs text-white/60 leading-relaxed mx-auto max-w-xl">
              Technology under development. Not yet approved for clinical use.
              Information provided on this website does not constitute medical advice.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}