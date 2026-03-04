import "./globals.css";
import Footer from "../components/footer";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: "Nalgoova Therapeutics | Precision Solution for Severe Craniofacial Pain and Trigeminal Neuralgia",
  description:
    "Nalgoova Therapeutics is developing a targeted, minimally invasive interventional solution for severe craniofacial pain conditions, including trigeminal neuralgia. Our patient-centric approach focuses on anatomical precision, individualized procedural targeting, and structured clinical validation within specialized pain centers.",

  openGraph: {
    title: "Nalgoova Therapeutics | Precision Solution for Severe Craniofacial Pain and Trigeminal Neuralgia",
    description:
      "Targeted, minimally invasive interventional Solution under development for severe craniofacial pain, including trigeminal neuralgia — patient-centric, anatomically precise, and evidence-driven.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Nalgoova Therapeutics — Precision in Craniofacial Pain",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nalgoova Therapeutics | Precision in Craniofacial Pain",
    description:
      "Patient-centric, anatomically precise interventional solution under development for severe craniofacial pain, including trigeminal neuralgia.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="vt">
      <body className="bg-noise font-sans">
        {children}
        <Footer />
      </body
      {children}
<Footer />
<CookieBanner />>
    </html>
  );
}
