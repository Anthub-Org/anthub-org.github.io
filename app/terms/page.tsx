"use client"

import Link from "next/link"
import type { ReactNode } from "react"

import { DocumentMetadata } from "@/components/document-metadata"
import PrintButton from "@/components/ui/print-button"

const sections = [
  ["accept", "Acceptance"],
  ["service", "Service"],
  ["accounts", "Accounts"],
  ["shops", "Shops"],
  ["drivers", "Drivers"],
  ["content", "Content"],
  ["liability", "Liability"],
  ["termination", "Termination"],
  ["contact", "Contact"],
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-[#101820]">
      <DocumentMetadata title="Terms of Service | AntHub" description="The terms that govern your use of AntHub." />

      <section className="bg-[#071311] text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-medium text-[#b8ec58] hover:text-white">
            Back to AntHub
          </Link>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8ec58]">Legal</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">Terms of Service</h1>
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
            AntHub helps auto shops and car owners coordinate service visits. Shops remain responsible for the automotive
            services they provide, and users are responsible for the information, decisions, and communications they make
            through the platform.
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
          <LegalSection id="accept" title="1. Acceptance of Terms">
            <p>
              By creating an account, accessing, or using AntHub, you agree to these Terms of Service and our Privacy
              Policy. If you do not agree, do not use AntHub.
            </p>
          </LegalSection>

          <LegalSection id="service" title="2. The AntHub Service">
            <p>
              AntHub provides software that helps car owners, auto shops, mechanics, agents, and administrators manage
              service visit workflows, including intake, appointments, service requests, assignments, chat, photo updates,
              approvals, history, and reminders.
            </p>
            <p>
              AntHub is not the mechanic, repair provider, insurer, or vehicle manufacturer. Automotive services are
              provided by independent shops or service providers.
            </p>
          </LegalSection>

          <LegalSection id="accounts" title="3. Accounts and Eligibility">
            <ul>
              <li>You must provide accurate account and contact information.</li>
              <li>You are responsible for activity under your account.</li>
              <li>You must keep login credentials secure and notify us about unauthorized use.</li>
              <li>You must be legally able to use the service in your jurisdiction.</li>
            </ul>
          </LegalSection>

          <LegalSection id="shops" title="4. Shop and Staff Responsibilities">
            <p>Shops and staff are responsible for:</p>
            <ul>
              <li>The quality, safety, pricing, timing, and legality of services they provide.</li>
              <li>Accurate service descriptions, updates, recommendations, and completion notes.</li>
              <li>Obtaining any customer approvals required before additional work continues.</li>
              <li>Managing staff access and using customer information only for legitimate service purposes.</li>
            </ul>
          </LegalSection>

          <LegalSection id="drivers" title="5. Customer Responsibilities">
            <p>Customers are responsible for:</p>
            <ul>
              <li>Providing accurate vehicle, contact, and appointment information.</li>
              <li>Reviewing service recommendations and decisions before approving or declining work.</li>
              <li>Communicating respectfully with shops, mechanics, agents, and support staff.</li>
              <li>Resolving service, pricing, pickup, or repair disputes directly with the relevant shop where appropriate.</li>
            </ul>
          </LegalSection>

          <LegalSection id="content" title="6. Messages, Photos, and User Content">
            <p>
              Users may upload or send service-related messages, photos, vehicle details, profile images, and other
              content. You are responsible for content you provide and must not upload unlawful, misleading, offensive, or
              infringing material.
            </p>
          </LegalSection>

          <LegalSection id="liability" title="7. Disclaimers and Limitation of Liability">
            <p>
              AntHub is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, AntHub
              is not liable for indirect, incidental, special, consequential, or punitive damages, or for disputes between
              customers and independent shops.
            </p>
          </LegalSection>

          <LegalSection id="termination" title="8. Suspension or Termination">
            <p>
              We may suspend or terminate access if a user violates these Terms, misuses the platform, creates security
              risk, or engages in fraudulent, harmful, or unlawful activity. You may stop using AntHub at any time.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="9. Changes to These Terms">
            <p>
              We may update these Terms as AntHub evolves. If changes are significant, we will provide notice through the
              website, app, email, or another appropriate channel.
            </p>
          </LegalSection>

          <LegalSection id="law" title="10. Governing Law">
            <p>
              These Terms are governed by the laws of Canada and applicable provincial laws, without regard to
              conflict-of-law rules.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="11. Contact Us">
            <p>
              For questions about these Terms, contact us at{" "}
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
