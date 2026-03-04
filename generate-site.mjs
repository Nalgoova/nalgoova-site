#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = process.cwd();
const write = (p, s) => {
  const fp = path.join(root, p);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, s, "utf8");
};
const json = (o) => JSON.stringify(o, null, 2);

// ============ PACKAGE + CONFIG ============
write("package.json", json({
  name: "nalgoova-site",
  private: true,
  version: "0.1.0",
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start"
  },
  dependencies: {
    next: "14.2.5",
    react: "18.3.1",
    "react-dom": "18.3.1",
    "framer-motion": "11.3.2",
    clsx: "2.1.1"
  },
  devDependencies: {
    tailwindcss: "3.4.10",
    postcss: "8.4.41",
    autoprefixer: "10.4.20"
  }
}));

write("next.config.mjs", `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { viewTransition: true }
};
export default nextConfig;
`.trim() + "\n");

write("postcss.config.js", `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`);

write("tailwind.config.js", `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          daintree: "#04222C",   // Pantone 5463 C
          elm: "#0F7C83",        // Pantone 2237 C
          orange: "#FF5037",     // Pantone 171 C
          dandelion: "#FCDD65",  // Pantone 120 C
          gum: "#B3D6C2",        // Pantone 2246 C
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(4,34,44,0.10)",
        glass: "0 18px 60px rgba(4,34,44,0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
`.trim() + "\n");

// ============ GLOBAL CSS ============
write("app/globals.css", `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --daintree:#04222C;
  --elm:#0F7C83;
  --orange:#FF5037;
  --dandelion:#FCDD65;
  --gum:#B3D6C2;
  --bg:#fff;
}

html { scroll-behavior: smooth; }
body { background: var(--bg); color: #0b1220; }

/* Subtle Swiss-medtech background */
.bg-noise{
  background-image:
    radial-gradient(1200px 600px at 80% 10%, rgba(179,214,194,.18), transparent 60%),
    radial-gradient(900px 520px at 10% 20%, rgba(15,124,131,.14), transparent 60%);
}

*{ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
a { text-underline-offset: 3px; }

/* WOW page transitions (View Transitions API) */
.vt::view-transition-old(root),
.vt::view-transition-new(root) {
  animation-duration: 420ms;
  animation-timing-function: cubic-bezier(0.21, 0.61, 0.35, 1);
}
.vt::view-transition-old(root){ animation-name: vt-out; }
.vt::view-transition-new(root){ animation-name: vt-in; }

@keyframes vt-out {
  from { opacity: 1; transform: translateY(0px); filter: blur(0px); }
  to   { opacity: 0; transform: translateY(-10px); filter: blur(8px); }
}
@keyframes vt-in {
  from { opacity: 0; transform: translateY(14px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0px); filter: blur(0px); }
}
`.trim() + "\n");

// ============ COMPONENTS ============
write("components/ui.js", `
import clsx from "clsx";

export function Container({ className, ...props }) {
  return <div className={clsx("mx-auto w-[min(1160px,calc(100%-48px))]", className)} {...props} />;
}

export function Button({ variant="primary", className, ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition active:translate-y-[1px]";
  const styles = {
    primary: "bg-brand-orange text-white shadow-soft hover:opacity-95",
    secondary: "bg-brand-daintree/5 text-brand-daintree border border-brand-daintree/15 hover:bg-brand-daintree/7",
    ghost: "bg-transparent border border-black/15 hover:bg-black/5"
  };
  return <a className={clsx(base, styles[variant], className)} {...props} />;
}

export function Card({ className, ...props }) {
  return <div className={clsx("rounded-xl2 border border-black/10 bg-white shadow-soft", className)} {...props} />;
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-black/60">
      <span className="h-[2px] w-4 rounded-full bg-brand-elm" />
      <span>{children}</span>
    </div>
  );
}
`.trim() + "\n");

write("components/nav.js", `
"use client";
import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="h-7 w-7 rounded-xl bg-[radial-gradient(circle_at_30%_30%,var(--dandelion),var(--orange)_45%,var(--daintree))]" />
          <span>Nalgoova Therapeutics</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-black/70 md:flex">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/product" className="hover:text-black">Product</Link>
          <Link href="/healthcare-professionals" className="hover:text-black">Healthcare Professionals</Link>
          <Link href="/investors" className="hover:text-black">Investors</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="secondary">Request information</Button>
        </div>

        <button
          className="md:hidden rounded-xl border border-black/10 px-3 py-2 text-sm font-semibold"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-3 text-sm font-semibold">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/product" onClick={() => setOpen(false)}>Product</Link>
            <Link href="/healthcare-professionals" onClick={() => setOpen(false)}>Healthcare Professionals</Link>
            <Link href="/investors" onClick={() => setOpen(false)}>Investors</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </Container>
        </div>
      )}
    </header>
  );
}
`.trim() + "\n");

write("components/footer.js", `
import Link from "next/link";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Nalgoova Therapeutics</div>
          <div className="mt-2 text-sm text-black/60">Switzerland</div>
          <div className="mt-1 text-sm">
            <a className="text-black/70 hover:text-black" href="mailto:info@nalgoova.com">info@nalgoova.com</a>
          </div>
        </div>

        <div className="text-sm text-black/60">
          The information on this website is provided for general educational purposes only and does not constitute medical advice.
          Our technology is under development and may not be commercially available in all jurisdictions.
        </div>

        <div className="flex flex-col gap-2 text-sm font-semibold">
          <Link href="/privacy" className="text-black/70 hover:text-black">Privacy</Link>
          <Link href="/contact" className="text-black/70 hover:text-black">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}
`.trim() + "\n");

// WOW transitions between pages (dissolve + slide + blur)
write("app/template.js", `
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
        transition={{ duration: 0.42, ease: [0.21, 0.61, 0.35, 1] }}
      >
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(4,34,44,0.20), rgba(4,34,44,0.05))",
            zIndex: 60
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
`.trim() + "\n");

// ============ LAYOUT ============
write("app/layout.js", `
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata = {
  title: "Nalgoova Therapeutics",
  description: "Targeted, minimally invasive solutions under development for severe craniofacial pain."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="vt">
      <body className="bg-noise font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
`.trim() + "\n");

// ============ PAGES (Home / Product / HCP / Investors / Contact / Privacy) ============

write("app/page.js", `
import { Container, Card, Button, Eyebrow } from "../components/ui";

function HeroVisual() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-black/10 bg-white/55 shadow-glass backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(500px_320px_at_30%_20%,rgba(252,221,101,.55),transparent_60%),radial-gradient(650px_420px_at_70%_70%,rgba(255,80,55,.22),transparent_62%),linear-gradient(180deg,rgba(4,34,44,.06),rgba(179,214,194,.04))]" />
      <div className="absolute left-[18%] top-[22%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(252,221,101,.95),rgba(255,80,55,.55),rgba(4,34,44,.35))]" />
      <div className="absolute inset-0 [background:linear-gradient(90deg,rgba(179,214,194,.18)_1px,transparent_1px),linear-gradient(180deg,rgba(15,124,131,.14)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_55%_55%,black,transparent_70%)]" />
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-black/70">
        Anatomical mapping • Targeted intervention • Evidence framework
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="pt-14">
        <Container className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <Eyebrow>Swiss medtech • under development</Eyebrow>
            <h1 className="mt-3 text-[clamp(34px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.02em]">
              When pain has a precise location, it deserves a precise approach.
            </h1>
            <p className="mt-4 max-w-[58ch] text-[16px] text-black/65">
              Nalgoova Therapeutics is developing a targeted, minimally invasive platform for severe craniofacial pain
              conditions such as trigeminal neuralgia and cluster headache.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/product" variant="primary">Explore the product</Button>
              <Button href="/healthcare-professionals" variant="secondary">For healthcare professionals</Button>
              <Button href="/investors" variant="ghost">For investors</Button>
            </div>
            <p className="mt-4 text-xs text-black/55">
              This website provides general information only and does not provide medical advice.
            </p>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-[760px]">
            <h2 className="text-[clamp(26px,2.4vw,38px)] font-semibold tracking-[-0.015em]">Results that matter</h2>
            <p className="mt-2 text-black/60">A disciplined path from development to validation, designed for real clinical environments.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[
              ["Targeted", "Anatomically guided approach"],
              ["Minimally invasive", "Designed for pain centers"],
              ["Evidence-first", "Registry-ready outcomes"],
              ["Regulatory-aware", "Staged validation strategy"]
            ].map(([a,b]) => (
              <Card key={a} className="p-5">
                <div className="text-lg font-semibold text-brand-daintree">{a}</div>
                <div className="mt-2 text-sm text-black/65">{b}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>For patients</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,2.4vw,38px)] font-semibold tracking-[-0.015em]">
              Severe facial pain is not “just pain.”
            </h2>
            <p className="mt-3 text-black/65">
              Living with trigeminal neuralgia or cluster headache can be unpredictable and life-disrupting.
              Nalgoova is developing a more targeted approach centered on anatomical precision.
            </p>
            <div className="mt-4 rounded-2xl border border-brand-dandelion/60 bg-brand-dandelion/30 p-4">
              <div className="font-semibold">Pain has a location. Treatment should too.</div>
              <div className="mt-1 text-sm text-black/65">
                Registration on this website is for updates only and does not constitute treatment access.
              </div>
            </div>
            <div className="mt-5">
              <Button href="/contact" variant="primary">Stay informed</Button>
            </div>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="h-[360px] bg-[radial-gradient(600px_360px_at_20%_20%,rgba(179,214,194,.28),transparent_55%),radial-gradient(700px_420px_at_70%_70%,rgba(15,124,131,.22),transparent_58%),linear-gradient(180deg,rgba(4,34,44,.06),white)]" />
            <div className="flex items-center justify-between px-5 py-4 text-xs text-black/55">
              <span>Not medical advice</span><span>Under development</span>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16">
        <div className="bg-brand-daintree text-white">
          <Container className="grid gap-6 py-14 md:grid-cols-3">
            <div className="md:col-span-1">
              <Eyebrow>For investors</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Precision intervention in a chronic-cost ecosystem</h2>
              <p className="mt-3 text-white/70">Positioned between chronic pharmacology and invasive neurosurgery, designed for scalable integration.</p>
            </div>

            {[
              ["Strategic positioning", ["Between biologics and neurosurgery", "Workflow fit for pain centers", "Validation-first roadmap"]],
              ["Value drivers", ["Regulatory-aware strategy", "IP & platform development", "Evidence + health economics alignment"]],
            ].map(([t, items]) => (
              <Card key={t} className="border-white/15 bg-white/5 p-6 shadow-none">
                <div className="text-lg font-semibold">{t}</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {items.map(x => <li key={x}>• {x}</li>)}
                </ul>
              </Card>
            ))}

            <div className="md:col-span-3">
              <div className="mt-2 flex flex-wrap gap-3">
                <Button href="/investors" variant="primary">Investor page</Button>
                <Button href="/contact" variant="secondary" className="border-white/20 text-white hover:bg-white/10">
                  Request information
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
`.trim() + "\n");

write("app/product/page.js", `
import { Container, Card, Button, Eyebrow } from "../../components/ui";

export default function Product() {
  return (
    <main className="py-14">
      <Container>
        <Eyebrow>Product</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">A targeted, minimally invasive platform</h1>
        <p className="mt-4 max-w-[70ch] text-black/65">
          Nalgoova is developing a structured interventional approach for severe craniofacial pain management,
          designed for reproducibility, evidence generation, and integration into specialized care.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Structured pain localization", "Standardized documentation to support procedural targeting and reproducibility."],
            ["Targeted RF microneedling", "Focal intervention designed to address peripheral pain pathways."],
            ["Outcome framework", "Registry-ready outcome collection to support validation and health economic assessment."]
          ].map(([t,d]) => (
            <Card key={t} className="p-6">
              <div className="text-lg font-semibold text-brand-daintree">{t}</div>
              <div className="mt-2 text-sm text-black/65">{d}</div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 overflow-hidden p-0">
          <div className="border-b border-black/10 px-6 py-4">
            <div className="text-lg font-semibold">How this approach is positioned</div>
            <div className="mt-1 text-sm text-black/60">
              A bridge between chronic drug exposure and highly invasive neurosurgical escalation.
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              ["Chronic pharmacology", ["Long-term exposure", "Variable tolerability", "Ongoing cost burden"]],
              ["Nalgoova (in development)", ["Targeted, procedural pathway", "Workflow integration focus", "Evidence & registry strategy"]],
              ["Invasive surgery", ["High invasiveness", "Procedure risk", "Limited scalability"]],
            ].map(([col, items]) => (
              <div key={col} className="border-t border-black/10 px-6 py-5 md:border-t-0 md:border-l md:first:border-l-0">
                <div className="font-semibold text-brand-daintree">{col}</div>
                <ul className="mt-3 space-y-2 text-sm text-black/65">
                  {items.map(x => <li key={x}>• {x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/healthcare-professionals" variant="secondary">For healthcare professionals</Button>
          <Button href="/contact" variant="primary">Request information</Button>
        </div>

        <p className="mt-5 text-xs text-black/55">
          Under development. Not yet approved or commercially available in all jurisdictions. No medical advice.
        </p>
      </Container>
    </main>
  );
}
`.trim() + "\n");

write("app/healthcare-professionals/page.js", `
import { Container, Card, Button, Eyebrow } from "../../components/ui";

export default function HCP() {
  return (
    <main className="py-14">
      <Container>
        <Eyebrow>Healthcare professionals</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Built for real-world clinical workflows</h1>
        <p className="mt-4 max-w-[76ch] text-black/65">
          Nalgoova’s development strategy prioritizes structured integration within specialized pain management centers,
          with a focus on reproducibility, outcomes documentation, and staged validation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Pain management centers", "Designed for specialized centers managing refractory craniofacial pain."],
            ["Neurology clinics", "Supports collaboration and referral pathways for complex patient populations."],
            ["Interventional specialists", "Procedural approach under development with structured documentation framework."]
          ].map(([t,d]) => (
            <Card key={t} className="p-6">
              <div className="text-lg font-semibold text-brand-daintree">{t}</div>
              <div className="mt-2 text-sm text-black/65">{d}</div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6">
          <div className="text-lg font-semibold">Clinical focus</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-brand-elm/10 p-4">
              <div className="font-semibold">Evidence & outcomes</div>
              <div className="mt-1 text-sm text-black/65">Registry-aligned outcomes documentation and staged validation planning.</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-brand-gum/30 p-4">
              <div className="font-semibold">Regulatory awareness</div>
              <div className="mt-1 text-sm text-black/65">Development aligned to documentation quality and clinical reproducibility.</div>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">Request information</Button>
          <Button href="/product" variant="secondary">Back to product</Button>
        </div>

        <p className="mt-5 text-xs text-black/55">
          This information is for educational purposes and does not constitute medical advice. Under development.
        </p>
      </Container>
    </main>
  );
}
`.trim() + "\n");

write("app/investors/page.js", `
import { Container, Card, Button, Eyebrow } from "../../components/ui";

function Milestone({ title, items }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[6px] top-[6px] h-2 w-2 rounded-full bg-brand-orange" />
      <div className="absolute left-[9px] top-4 h-full w-[1px] bg-white/15" />
      <div className="text-sm font-semibold text-white/80">{title}</div>
      <ul className="mt-2 space-y-2 text-sm text-white/70">
        {items.map(x => <li key={x}>• {x}</li>)}
      </ul>
    </div>
  );
}

export default function Investors() {
  return (
    <main>
      <section className="bg-brand-daintree py-14 text-white">
        <Container>
          <Eyebrow>Investors</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Disciplined development. Scalable deployment.</h1>
          <p className="mt-4 max-w-[80ch] text-white/70">
            Nalgoova is developing a targeted interventional platform positioned between chronic pharmacology
            and invasive neurosurgery, designed for pain-center workflows and staged validation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Lab to market", "Staged pathway from development to clinical validation and regulatory readiness."],
              ["Investor inquiries", "Request corporate information: strategy, pipeline and roadmap."],
              ["Why now", "High-burden area with limited scalable precision interventions between extremes."]
            ].map(([t,d]) => (
              <Card key={t} className="border-white/15 bg-white/5 p-6 shadow-none">
                <div className="text-lg font-semibold">{t}</div>
                <div className="mt-2 text-sm text-white/70">{d}</div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Contact investor relations</Button>
            <Button href="/product" variant="secondary" className="border-white/20 text-white hover:bg-white/10">Product</Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-daintree py-16 text-white">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Milestones</h2>
          <p className="mt-2 max-w-[80ch] text-white/70">A staged validation strategy with increasing clinical and regulatory maturity.</p>

          <div className="mt-8 grid gap-8 md:grid-cols-4">
            <Milestone title="Phase 1" items={["Protocol & workflow definition", "Technical feasibility", "Evidence framework design"]} />
            <Milestone title="Phase 2" items={["Pilot evaluation planning", "Registry setup", "Regulatory documentation build"]} />
            <Milestone title="Phase 3" items={["Expanded validation", "Health economics support", "Scale-up readiness"]} />
            <Milestone title="Phase 4" items={["Clinical adoption ramp", "Commercial readiness", "International expansion planning"]} />
          </div>
        </Container>
      </section>
    </main>
  );
}
`.trim() + "\n");

write("app/contact/page.js", `
"use client";
import { useState } from "react";
import { Container, Card, Eyebrow } from "../../components/ui";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="py-14">
      <Container>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Request information</h1>
        <p className="mt-4 max-w-[80ch] text-black/65">
          For patient information, investor inquiries, or professional collaboration requests, contact us below.
          This form does not provide medical advice and does not constitute treatment access or clinical enrollment.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Email</div>
            <div className="mt-2 text-sm text-black/65">
              <a href="mailto:info@nalgoova.com" className="font-semibold text-brand-daintree hover:underline">info@nalgoova.com</a>
            </div>
            <div className="mt-4 rounded-2xl border border-brand-dandelion/60 bg-brand-dandelion/30 p-4 text-sm text-black/70">
              Registration is for informational updates only and does not constitute medical advice.
            </div>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Inquiry form (demo)</div>
            <form className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
              <label className="block text-sm font-semibold text-black/70">
                I am a
                <select className="mt-1 w-full rounded-2xl border border-black/15 px-3 py-2" required>
                  <option value="">Select</option>
                  <option>Patient / relative</option>
                  <option>Investor</option>
                  <option>Healthcare professional</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block text-sm font-semibold text-black/70">
                Email
                <input type="email" className="mt-1 w-full rounded-2xl border border-black/15 px-3 py-2" required />
              </label>

              <label className="block text-sm font-semibold text-black/70">
                Message
                <textarea className="mt-1 w-full rounded-2xl border border-black/15 px-3 py-2" rows="5" required />
              </label>

              <button className="inline-flex items-center justify-center rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-soft">
                Send
              </button>

              {sent && <p className="text-sm font-semibold text-brand-elm">Sent (demo). Hook this to your CRM later.</p>}
            </form>
          </Card>
        </div>
      </Container>
    </main>
  );
}
`.trim() + "\n");

write("app/privacy/page.js", `
import { Container, Eyebrow, Card } from "../../components/ui";

export default function Privacy() {
  return (
    <main className="py-14">
      <Container>
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Privacy policy (placeholder)</h1>
        <p className="mt-4 max-w-[85ch] text-black/65">
          Replace with your final Swiss/EU compliant privacy policy. If you collect emails for updates,
          specify purpose, lawful basis, retention, processors, and user rights.
        </p>

        <Card className="mt-8 p-6">
          <div className="font-semibold">Email updates</div>
          <ul className="mt-3 space-y-2 text-sm text-black/65">
            <li>• We collect only the data you submit.</li>
            <li>• Used only for general informational updates (no medical advice).</li>
            <li>• You can unsubscribe anytime; data is not sold.</li>
          </ul>
        </Card>
      </Container>
    </main>
  );
}
`.trim() + "\n");

console.log("\\n✅ Site files created.");
console.log("Now run:");
console.log("  npm install");
console.log("  npm run dev");
console.log("Then open:");
console.log("  http://localhost:3000");
