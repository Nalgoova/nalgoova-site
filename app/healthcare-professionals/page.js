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
