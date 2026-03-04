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
