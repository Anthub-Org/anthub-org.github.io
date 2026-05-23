import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  BellRing,
  CalendarClock,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Download,
  FileText,
  Handshake,
  History,
  MessageCircle,
  MonitorSmartphone,
  QrCode,
  ShieldCheck,
  Smartphone,
  Store,
  UserRoundCheck,
  UsersRound,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AntHub - Auto Service Customers Can Track and Trust",
  description:
    "AntHub connects auto shops and car owners through QR intake, appointment chat, mechanic photo updates, service approvals, vehicle history, and reminders.",
}

type NavItem = {
  label: string
  target: string
}

type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

type StepItem = {
  title: string
  description: string
}

type AppDownload = FeatureItem & {
  androidUrl: string
}

type FooterLink = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Platform", target: "platform" },
  { label: "Shops", target: "shops" },
  { label: "Drivers", target: "drivers" },
  { label: "Workflow", target: "workflow" },
  { label: "Apps", target: "apps" },
]

const appDownloads: AppDownload[] = [
  {
    icon: Smartphone,
    title: "AntHub Customer",
    description: "For car owners tracking visits, vehicles, chat updates, approvals, and reminders.",
    androidUrl: "https://play.google.com/store/apps/details?id=app.anthub.ca",
  },
  {
    icon: MonitorSmartphone,
    title: "AntHub Business",
    description: "For shop owners, agents, and shop teams managing service requests, assignments, and customer updates.",
    androidUrl: "https://play.google.com/store/apps/details?id=ca.anthub.business",
  },
]

const platformSignals: FeatureItem[] = [
  {
    icon: QrCode,
    title: "QR intake for walk-ins",
    description:
      "Invite a customer at the counter and connect their profile, vehicle, shop, and active service visit in one flow.",
  },
  {
    icon: ClipboardCheck,
    title: "Common services or custom work",
    description:
      "Start from familiar service categories, then capture unique issues when the repair does not fit a standard checklist.",
  },
  {
    icon: UsersRound,
    title: "Assignment and ownership",
    description:
      "Give each visit a clear owner, assign mechanics, and keep shop teams aligned from intake to pickup.",
  },
  {
    icon: MessageCircle,
    title: "Appointment-specific chat",
    description:
      "Keep service conversations tied to the visit, with photo updates and context that does not get lost in a text thread.",
  },
  {
    icon: History,
    title: "Vehicle records",
    description:
      "Customers can manage vehicles, profile details, photos, and service history across repeat visits.",
  },
  {
    icon: BellRing,
    title: "Follow-up reminders",
    description:
      "Completed work can turn into helpful reminders and education for the next oil change, tire swap, or inspection.",
  },
]

const shopFeatures: FeatureItem[] = [
  {
    icon: Store,
    title: "A cleaner front counter",
    description:
      "Replace scattered paper notes with a digital visit record that starts when the customer arrives.",
  },
  {
    icon: Wrench,
    title: "Mechanic documentation",
    description:
      "Capture notes, photos, service updates, and recommendations while the vehicle is still in the bay.",
  },
  {
    icon: UserRoundCheck,
    title: "Agent support flow",
    description:
      "Agents can help shops and customers through open questions, pending decisions, and service follow-up.",
  },
  {
    icon: CalendarClock,
    title: "Booking and pickup context",
    description:
      "Track appointment timing, future booking, pickup expectations, and status changes from the same workflow.",
  },
]

const driverFeatures: FeatureItem[] = [
  {
    icon: Smartphone,
    title: "Progress from the phone",
    description:
      "See visit status, mechanic updates, service notes, and shop communication without calling the desk again.",
  },
  {
    icon: ShieldCheck,
    title: "Approve extra work first",
    description:
      "Review recommendations and supporting photos before the shop continues with additional work.",
  },
  {
    icon: Camera,
    title: "Photos make repairs clearer",
    description:
      "Image updates help customers understand what the shop found and why a repair is being recommended.",
  },
  {
    icon: FileText,
    title: "A record for the next visit",
    description:
      "Vehicle history stays available for repeat maintenance instead of disappearing into receipts and old messages.",
  },
]

const workflowSteps: StepItem[] = [
  {
    title: "Drop off",
    description: "The shop starts a visit and invites the customer through the counter QR flow.",
  },
  {
    title: "Inspect",
    description: "A mechanic checks the vehicle, updates status, and documents what they find.",
  },
  {
    title: "Decide",
    description: "The customer reviews additional recommendations, photos, and notes before approving work.",
  },
  {
    title: "Complete",
    description: "The visit closes with a service record, pickup context, and follow-up reasons.",
  },
  {
    title: "Return",
    description: "Reminders and history make the next visit easier for the customer and the shop.",
  },
]

const serviceCategories = [
  "Oil and fluids",
  "Brake service",
  "Tires and wheels",
  "Battery checks",
  "Engine diagnostics",
  "Electrical work",
  "Digital inspection",
  "Seasonal maintenance",
  "Custom requests",
]

const faqs = [
  {
    question: "Can AntHub work for walk-in customers?",
    answer:
      "Yes. A shop can introduce AntHub at the counter with a QR code, then connect the customer to the active service visit.",
  },
  {
    question: "Is this only for booking appointments?",
    answer:
      "No. Booking is only one part of the experience. AntHub focuses on the full visit: intake, assignment, updates, decisions, completion, and follow-up.",
  },
  {
    question: "How does AntHub help shops earn trust?",
    answer:
      "Mechanics can document findings with notes and photos, and customers can approve additional work before the shop continues.",
  },
  {
    question: "What apps are part of the platform?",
    answer:
      "AntHub includes a customer app for drivers and an AntHub Business app for shop teams, with admin and agent workflows supporting the broader operation.",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f8f5] text-[#101820]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071311]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="AntHub home">
            <img src="/anthub-logo.png" alt="AntHub" className="h-10 w-auto rounded-sm bg-white px-2 py-1" width={150} height={58} />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#apps"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-[#071311] transition-all hover:bg-[#e8f4df]"
            >
              View Apps
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <nav className="border-t border-white/10 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[86svh] overflow-hidden bg-[#071311]">
          <img
            src="/anthub-front-counter-hero.png"
            alt="Driver scanning a QR code at an auto service counter"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,17,0.98)_0%,rgba(7,19,17,0.84)_43%,rgba(7,19,17,0.26)_100%)]" />

          <div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur">
                <BadgeCheck className="size-4 text-[#b8ec58]" />
                Built for the repair visit, not just the booking
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Auto service that customers can track and trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                AntHub helps shops connect drivers, mechanics, service advisors, and agents around one shared visit
                record - from QR intake to photo updates, approvals, pickup, and reminders.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#shops"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8dce37] px-5 text-base font-semibold text-[#071311] transition-all hover:bg-[#b8ec58]"
                >
                  For shop teams
                  <ChevronRight className="size-4" />
                </a>
                <a
                  href="#drivers"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#071311]"
                >
                  For car owners
                </a>
              </div>
            </div>

            <div className="mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Walk-in ready", "Start at the counter"],
                ["Photo-backed", "Show what changed"],
                ["Decision focused", "Approve before extra work"],
                ["History aware", "Keep the next visit simple"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-md border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-white/70">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Platform"
              title="One service record for every role in the visit."
              description="The strongest AntHub experience starts when a shop uses the app as the living record for a repair visit: who came in, what vehicle arrived, what the mechanic found, what the customer approved, and what comes next."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {platformSignals.map((item) => (
                <FeatureTile key={item.title} item={item} tone="neutral" />
              ))}
            </div>
          </div>
        </section>

        <section id="apps" className="bg-[#eef4eb]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2e7d32]">Two Apps, One Visit</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
                A customer app and a business app built around the same repair flow.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#52605a]">
                Drivers get updates, decisions, messages, and records. Shops get intake, assignments, dashboards, and
                service documentation. The experience stays connected because both sides are looking at the same visit.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {appDownloads.map((app) => (
                  <AppCard key={app.title} app={app} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-[#dfe7dc] bg-white shadow-[0_22px_70px_rgba(16,24,32,0.12)]">
              <img
                src="/anthub-app-workflow-mockup.png"
                alt="AntHub customer and business app workflow mockups"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="shops" className="bg-[#101820] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
            <div className="overflow-hidden rounded-md border border-white/10 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.25)]">
              <img
                src="/anthub-service-proof.png"
                alt="Mechanic documenting a brake inspection with a smartphone"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <SectionHeader
                eyebrow="For Shops"
                title="Run the day with less confusion at the counter."
                description="AntHub gives shops a practical operating layer for service visits, especially the moments where customers normally wait, call back, or wonder what is happening."
                inverse
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {shopFeatures.map((item) => (
                  <FeatureTile key={item.title} item={item} tone="shop" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="drivers" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow="For Drivers"
                  title="Know what is happening before you say yes."
                  description="Car service feels better when the customer can see the status, understand the recommendation, and keep the record for next time."
                />
                <div className="mt-8 rounded-md border border-[#cfdcc9] bg-[#f8faf7] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2e7d32]">Common Visit Moment</p>
                  <p className="mt-4 text-2xl font-semibold leading-snug">
                    "The mechanic found something else. Can I see what they mean before approving it?"
                  </p>
                  <p className="mt-4 leading-7 text-[#52605a]">
                    AntHub turns that moment into a clear update with context, photos, and a decision path.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {driverFeatures.map((item) => (
                  <FeatureTile key={item.title} item={item} tone="neutral" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-[#e5efe0]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Workflow"
              title="A simple path from drop-off to the next visit."
              description="The flow feels familiar to any driver who has left a car at a shop and waited for answers."
            />

            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="rounded-md border border-[#cfdcc9] bg-white p-5">
                  <div className="flex size-10 items-center justify-center rounded-md bg-[#8dce37] font-semibold text-[#071311]">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#52605a]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Service Coverage"
                title="Structured enough for common jobs. Flexible enough for real life."
                description="Shops can start from recognizable categories while still capturing custom requests and unexpected findings."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {serviceCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-md border border-[#cfdcc9] bg-[#f8faf7] px-4 py-3 text-sm font-medium text-[#24322c]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071311] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeader
                eyebrow="Why It Matters"
                title="The repair itself happens in the bay. Trust is built everywhere around it."
                description="AntHub gives shops a more transparent way to manage the moments around service: intake, communication, approvals, records, and reminders."
                inverse
              />

              <div className="grid gap-4 sm:grid-cols-3">
                <ProofPoint icon={Handshake} title="Trust" text="Customers see the reason behind a recommendation." />
                <ProofPoint icon={Clock3} title="Flow" text="Teams know what is waiting, assigned, or ready." />
                <ProofPoint icon={CheckCircle2} title="Return" text="History and reminders support the next visit." />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions shops and drivers ask first."
              description="Straight answers for the public site, focused on how AntHub fits into a real service visit."
            />

            <div className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-md border border-[#dfe7dc] bg-[#f8faf7] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                    {faq.question}
                    <ChevronRight className="size-5 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl leading-7 text-[#52605a]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101820] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8ec58]">Modern Service Experience</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal">
                Make every repair visit easier to understand, approve, and remember.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#shops"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#8dce37] px-4 text-sm font-medium text-[#071311] transition-all hover:bg-[#b8ec58]"
              >
                For shop teams
              </a>
              <a
                href="#drivers"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-4 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#101820]"
              >
                For car owners
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfe7dc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/anthub-logo.png" alt="AntHub" className="h-10 w-auto" width={150} height={58} />
            </div>
            <p className="mt-4 max-w-sm leading-7 text-[#52605a]">
              Auto service that customers can track and shops can run with more clarity.
            </p>
          </div>

          <FooterGroup
            title="Product"
            items={[
              { label: "QR intake", href: "#platform" },
              { label: "Approvals", href: "#drivers" },
              { label: "Service history", href: "#workflow" },
              { label: "Shop operations", href: "#shops" },
            ]}
          />
          <FooterGroup
            title="Apps"
            items={[
              { label: "AntHub Customer", href: "#apps" },
              { label: "AntHub Business", href: "#apps" },
              { label: "Android downloads", href: "#apps" },
              { label: "Service workflow", href: "#workflow" },
            ]}
          />
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#52605a]">
              <li>
                <a className="hover:text-[#101820]" href="mailto:support@anthub.ca">
                  support@anthub.ca
                </a>
              </li>
              <li>
                <a className="hover:text-[#101820]" href="/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#101820]" href="/terms/">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#dfe7dc] px-4 py-5 text-center text-sm text-[#66746d]">
          &copy; 2026 AntHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string
  title: string
  description: string
  inverse?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${inverse ? "text-[#b8ec58]" : "text-[#2e7d32]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl ${inverse ? "text-white" : "text-[#101820]"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${inverse ? "text-white/70" : "text-[#52605a]"}`}>{description}</p>
    </div>
  )
}

function FeatureTile({ item, tone }: { item: FeatureItem; tone: "shop" | "neutral" }) {
  const Icon = item.icon
  const inverse = tone === "shop"

  return (
    <div
      className={`rounded-md border p-5 ${
        inverse ? "border-white/10 bg-white/10 text-white" : "border-[#dfe7dc] bg-[#f8faf7] text-[#101820]"
      }`}
    >
      <span
        className={`flex size-11 items-center justify-center rounded-md ${
          inverse ? "bg-[#8dce37] text-[#071311]" : "bg-[#e5f4dd] text-[#2e7d32]"
        }`}
      >
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
      <p className={`mt-3 text-sm leading-6 ${inverse ? "text-white/70" : "text-[#66746d]"}`}>{item.description}</p>
    </div>
  )
}

function AppCard({ app }: { app: AppDownload }) {
  const Icon = app.icon

  return (
    <div className="flex h-full flex-col rounded-md border border-[#cfdcc9] bg-white p-5">
      <span className="flex size-11 items-center justify-center rounded-md bg-[#e5f4dd] text-[#2e7d32]">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{app.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#52605a]">{app.description}</p>
      <div className="mt-auto grid gap-2 pt-5">
        <a
          href={app.androidUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-full items-center justify-start gap-2 rounded-md bg-[#101820] px-4 text-sm font-medium text-white transition-all hover:bg-[#24322c]"
        >
          <Download className="size-4" />
          Android on Google Play
        </a>
        <span
          aria-disabled="true"
          className="inline-flex h-11 w-full cursor-not-allowed items-center justify-start gap-2 rounded-md border border-[#cfdcc9] bg-white px-4 text-sm font-medium text-[#66746d] opacity-50"
        >
          <Apple className="size-4" />
          iOS coming soon
        </span>
      </div>
    </div>
  )
}

function ProofPoint({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/10 p-5">
      <span className="flex size-11 items-center justify-center rounded-md bg-white text-[#101820]">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
    </div>
  )
}

function FooterGroup({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-[#52605a]">
        {items.map((item) => (
          <li key={item.label}>
            <a className="hover:text-[#101820]" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
