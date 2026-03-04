export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>

        <p className="mb-6">
          This Privacy Policy describes how Nalgoova Therapeutics processes personal data in accordance with the EU General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (revFADP).
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Data Controller</h2>
        <p className="mb-4">
          Nalgoova Therapeutics<br />
          Switzerland<br />
          Email: info@nalgoova.com
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. Categories of Data Collected</h2>
        <p className="mb-4">
          We may collect the following personal data through our contact form:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Email address</li>
          <li>Professional category (Investor, Healthcare Professional, Patient/Relative)</li>
          <li>Message content voluntarily provided</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Purpose of Processing</h2>
        <p className="mb-4">
          Personal data is processed exclusively for the purpose of responding to inquiries and managing potential professional, clinical, or investor communications.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. Legal Basis</h2>
        <p className="mb-4">
          Processing is based on explicit consent provided through the contact form submission.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Data Retention</h2>
        <p className="mb-4">
          Personal data will be retained only for as long as necessary to respond to the inquiry or to maintain relevant professional correspondence. Data may be deleted upon request unless legal obligations require longer retention.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. Data Processors and Hosting</h2>
        <p className="mb-4">
          Contact form submissions are processed via FormSubmit (formsubmit.co), which acts as a data processor for forwarding inquiry messages. Website hosting may be provided by a third-party infrastructure provider. Appropriate safeguards are applied where required.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">7. International Transfers</h2>
        <p className="mb-4">
          If personal data is transferred outside the European Union or Switzerland, appropriate safeguards such as standard contractual clauses are applied where required.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">8. Data Subject Rights</h2>
        <p className="mb-4">
          Individuals have the right to request access, rectification, erasure, restriction of processing, or data portability. Requests may be submitted to info@nalgoova.com.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">9. Cookies</h2>
        <p className="mb-4">
          This website does not use tracking or profiling cookies. Only technically necessary cookies may be used to ensure proper website functionality.
        </p>

        <p className="mt-12 text-sm text-white/60">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}