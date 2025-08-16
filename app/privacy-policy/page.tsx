// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Anthub",
  description: "How Anthub collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <header className="flex items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Effective: <strong>15 August, 2025</strong> • Last Updated: <strong>15 August, 2025</strong>
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          Print
        </button>
      </header>

      <section className="border rounded-2xl p-5 mb-6">
        <div className="inline-flex items-center gap-2 text-emerald-500 border border-emerald-700/40 rounded-full px-3 py-1 text-xs">
          TL;DR
        </div>
        <p className="mt-3">
          We only collect what we need to connect car owners with car shops: your name, address, mobile number, and email.
          We <strong>do not sell</strong> your data. We use it only to operate and improve our service.
        </p>
      </section>

      <nav className="flex flex-wrap gap-2 text-sm mb-6">
        <a href="#who" className="border rounded-full px-3 py-1">Who We Are</a>
        <a href="#collect" className="border rounded-full px-3 py-1">Information We Collect</a>
        <a href="#use" className="border rounded-full px-3 py-1">How We Use Info</a>
        <a href="#share" className="border rounded-full px-3 py-1">Sharing</a>
        <a href="#rights" className="border rounded-full px-3 py-1">Your Rights (Canada)</a>
        <a href="#retention" className="border rounded-full px-3 py-1">Data Retention</a>
        <a href="#security" className="border rounded-full px-3 py-1">Security</a>
        <a href="#changes" className="border rounded-full px-3 py-1">Changes</a>
        <a href="#contact" className="border rounded-full px-3 py-1">Contact</a>
      </nav>

      <article className="prose prose-invert max-w-none">
        <section id="who">
          <h2>1. Who We Are</h2>
          <p>
            This policy applies to <strong>Anthub</strong> (“we,” “our,” or “us”), which connects car owners with car shops in Canada.
          </p>
        </section>

        <section id="collect">
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Name</strong></li>
            <li><strong>Shop address</strong> (for shop owners)</li>
            <li><strong>Car owner address</strong> (for car owners)</li>
            <li><strong>Mobile number</strong></li>
            <li><strong>Email address</strong></li>
          </ul>
        </section>

        <section id="use">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Match car owners with car shops</li>
            <li>Enable communication between parties</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section id="share">
          <h2>4. Sharing Your Information</h2>
          <p>We do <strong>not</strong> sell or rent personal data. We share information only to:</p>
          <ul>
            <li>Connect you with another user for a requested service</li>
            <li>Comply with legal requirements or lawful requests</li>
          </ul>
        </section>

        <section id="rights">
          <h2>5. Your Rights (Canada)</h2>
          <p>Under Canada’s <strong>PIPEDA</strong> and applicable provincial laws, you may:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request corrections</li>
            <li>Withdraw consent for certain uses</li>
            <li>Request deletion (subject to legal retention rules)</li>
          </ul>
          <p>Contact: <a href="mailto:support@anthub.ca">support@anthub.ca</a></p>
        </section>

        <section id="retention">
          <h2>6. Data Retention</h2>
          <p>We keep your data only as long as needed for service provision, legal compliance, and legitimate business purposes.</p>
        </section>

        <section id="security">
          <h2>7. Data Security</h2>
          <p>We use administrative, technical, and physical safeguards to protect your information against unauthorized access, disclosure, alteration, or destruction.</p>
        </section>

        <section id="changes">
          <h2>8. Changes to This Policy</h2>
          <p>If we make significant changes, we’ll notify you in-app or by email before they take effect.</p>
        </section>

        <section id="contact">
          <h2>9. Contact Us</h2>
          <p><strong>Email:</strong> <a href="mailto:support@anthub.ca">support@anthub.ca</a></p>
        </section>
      </article>
    </main>
  );
}
