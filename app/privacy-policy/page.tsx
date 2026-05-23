import type { Metadata } from "next"
import type { ReactNode } from "react"

import PrintButton from "@/components/ui/print-button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AntHub collects, uses, and protects information.",
}

const sections = [
  ["who", "Who We Are"],
  ["collect", "Information We Collect"],
  ["use", "How We Use Information"],
  ["share", "Sharing"],
  ["rights", "Your Rights"],
  ["retention", "Retention"],
  ["security", "Security"],
  ["contact", "Contact"],
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-[#101820]">
      <section className="bg-[#071311] text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center" aria-label="AntHub home">
            <img src="/anthub-logo-transparent.png" alt="AntHub" className="h-10 w-auto" width={150} height={58} />
          </a>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8ec58]">Legal</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">Privacy Policy</h1>
              <p className="mt-4 text-sm text-white/70">
                Effective: <strong>May 23, 2026</strong> | Last updated: <strong>May 23, 2026</strong>
              </p>
            </div>
            <PrintButton className="h-10 rounded-md border border-white/25 px-4 text-sm font-medium text-white hover:bg-white hover:text-[#071311]" />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-md border border-[#dfe7dc] bg-white p-5">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-3 leading-7 text-[#52605a]">
            AntHub helps car owners and auto shops manage service visits. We collect information needed to create
            accounts, identify vehicles, support appointment and service workflows, communicate updates, and improve the
            platform. We do not sell personal information.
          </p>
        </section>

        <nav className="flex flex-wrap gap-2 text-sm">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-md border border-[#cfdcc9] bg-white px-3 py-2 hover:border-[#8dce37]">
              {label}
            </a>
          ))}
        </nav>

        <article className="space-y-8">
          <LegalSection id="who" title="1. Who We Are">
            <p>
              This Privacy Policy applies to AntHub, including the AntHub customer app, AntHub Business app, public
              website, and related administrative workflows.
            </p>
          </LegalSection>

          <LegalSection id="collect" title="2. Information We Collect">
            <p>Depending on how you use AntHub, we may collect:</p>
            <ul>
              <li>Account information such as name, email address, mobile number, and profile photo.</li>
              <li>Shop information such as shop name, address, staff profile details, and service workflow data.</li>
              <li>Vehicle information such as make, model, images, service history, and appointment records.</li>
              <li>Service visit information such as requests, notes, status changes, mechanic updates, recommendations, and approvals.</li>
              <li>Messages and media shared through appointment chat, including photos used to explain service work.</li>
              <li>Technical information such as device data, log data, and usage activity needed to operate and secure the platform.</li>
            </ul>
          </LegalSection>

          <LegalSection id="use" title="3. How We Use Information">
            <p>We use information to:</p>
            <ul>
              <li>Create and manage customer, shop, staff, and agent accounts.</li>
              <li>Connect car owners with shops and active service visits.</li>
              <li>Support appointments, assignments, service requests, chat, photo updates, and approval workflows.</li>
              <li>Maintain vehicle service history and reminder experiences.</li>
              <li>Provide support, troubleshoot issues, protect accounts, and improve product reliability.</li>
              <li>Comply with legal obligations and enforce platform policies.</li>
            </ul>
          </LegalSection>

          <LegalSection id="share" title="4. Sharing Information">
            <p>
              We do not sell personal information. We share information only when needed to operate AntHub, such as
              showing service visit details to the relevant customer, shop, mechanic, or agent, or when required by law.
            </p>
          </LegalSection>

          <LegalSection id="rights" title="5. Your Rights">
            <p>
              Subject to applicable Canadian privacy laws, you may request access to your personal information, ask us to
              correct it, withdraw consent where applicable, or request deletion when retention is no longer required.
            </p>
          </LegalSection>

          <LegalSection id="retention" title="6. Data Retention">
            <p>
              We keep information only as long as reasonably needed for service delivery, account management, support,
              security, legal compliance, and legitimate business purposes.
            </p>
          </LegalSection>

          <LegalSection id="security" title="7. Security">
            <p>
              We use administrative, technical, and organizational safeguards designed to protect information from
              unauthorized access, disclosure, alteration, or destruction. No online service can guarantee absolute
              security.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy as the platform changes. If changes are significant, we will provide
              notice through the website, app, email, or another appropriate channel.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="9. Contact Us">
            <p>
              For privacy questions or requests, contact us at{" "}
              <a className="font-medium text-[#2e7d32] underline-offset-4 hover:underline" href="mailto:support@anthub.ca">
                support@anthub.ca
              </a>
              .
            </p>
          </LegalSection>
        </article>
      </div>
    </main>
  )
}

function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="rounded-md border border-[#dfe7dc] bg-white p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-[#52605a] [&_li]:ml-5 [&_li]:list-disc">{children}</div>
    </section>
  )
}
