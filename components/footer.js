import Link from "next/link";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Nalgoova Therapeutics SA</div>
          <div className="mt-2 text-xs text-black/70">
          Switzerland
          </div>
          <div className="mt-2 text-sm text-black/50">All rights reserved 2026.</div>
          <div className="mt-2 text-sm">
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
