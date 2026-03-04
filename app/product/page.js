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
