import type { Metadata } from "next";
import PrintButton from "../../components/ui/print-button";

export const metadata: Metadata = {
  title: "Terms & Conditions | Anthub",
  description: "The terms that govern the use of Anthub.",
};

export default function TermsPage() {
  const today = new Date().toLocaleDateString();

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <header className="flex items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">
            Effective: <strong>15 August, 2025</strong> • Last Updated: <strong>{today}</strong>
          </p>
        </div>
        <PrintButton />
      </header>

      <section className="border rounded-2xl p-5 mb-6">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border">
          TL;DR
        </div>
        <p className="mt-3">
          We connect car owners with car shops. You’re responsible for your own dealings with other users.
          We’re not liable for damages from those dealings. Use the app legally and respectfully.
        </p>
      </section>

      <nav className="flex flex-wrap gap-2 text-sm mb-6">
        <a href="#accept" className="border rounded-full px-3 py-1">Acceptance</a>
        <a href="#service" className="border rounded-full px-3 py-1">Our Service</a>
        <a href="#eligibility" className="border rounded-full px-3 py-1">Eligibility</a>
        <a href="#responsibilities" className="border rounded-full px-3 py-1">Your Responsibilities</a>
        <a href="#liability" className="border rounded-full px-3 py-1">Limitation of Liability</a>
        <a href="#termination" className="border rounded-full px-3 py-1">Termination</a>
        <a href="#ip" className="border rounded-full px-3 py-1">Intellectual Property</a>
        <a href="#changes" className="border rounded-full px-3 py-1">Changes</a>
        <a href="#law" className="border rounded-full px-3 py-1">Governing Law</a>
        <a href="#contact" className="border rounded-full px-3 py-1">Contact</a>
      </nav>

      <article className="prose prose-invert max-w-none">
        <section id="accept">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using <strong>Anthub</strong> (“the Service”), you agree to these Terms of
            Service and our Privacy Policy. If you do not agree, you may not use the Service.
          </p>
        </section>

        <section id="service">
          <h2>2. Our Service</h2>
          <ul>
            <li>Match car owners with car shops</li>
            <li>Facilitate communication between them</li>
          </ul>
          <p>We are <strong>not</strong> a party to any transaction or contract between users.</p>
        </section>

        <section id="eligibility">
          <h2>3. Eligibility</h2>
          <ul>
            <li>At least 18 years old, or have parental/guardian consent</li>
            <li>Capable of entering into a legally binding agreement</li>
          </ul>
        </section>

        <section id="responsibilities">
          <h2>4. Your Responsibilities</h2>
          <ul>
            <li>Provide accurate and up-to-date information</li>
            <li>Use the Service only for lawful purposes</li>
            <li>Do not post or transmit harmful, offensive, or false content</li>
            <li>Respect other users’ privacy and rights</li>
          </ul>
        </section>

        <section id="liability">
          <h2>5. Limitation of Liability</h2>
          <p>We are not responsible for:</p>
          <ul>
            <li>The quality, safety, or legality of services provided by shops</li>
            <li>Any disputes between users</li>
            <li>Any damages, losses, or claims arising from your use of the Service</li>
          </ul>
        </section>

        <section id="termination">
          <h2>6. Termination</h2>
          <p>We may suspend or terminate your account if you:</p>
          <ul>
            <li>Violate these Terms</li>
            <li>Misuse the Service</li>
            <li>Engage in fraudulent or harmful activity</li>
          </ul>
          <p>You may close your account at any time by contacting <a href="mailto:support@anthub.ca">support@anthub.ca</a>.</p>
        </section>

        <section id="ip">
          <h2>7. Intellectual Property</h2>
          <p>
            All content and software in the Service (except user-generated content) belong to <strong>Anthub</strong>
            and are protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section id="changes">
          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make significant changes, we will notify you before they
            take effect. Continued use of the Service after changes means you accept the new Terms.
          </p>
        </section>

        <section id="law">
          <h2>9. Governing Law</h2>
          <p>These Terms are governed by the laws of <strong>Canada</strong>, without regard to conflict-of-law principles.</p>
        </section>

        <section id="contact">
          <h2>10. Contact Us</h2>
          <p><strong>Email:</strong> <a href="mailto:support@anthub.ca">support@anthub.ca</a></p>
        </section>
      </article>
    </main>
  );
}
