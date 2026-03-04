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
