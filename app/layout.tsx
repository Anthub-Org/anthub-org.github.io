import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://anthub.ca"),
  title: {
    default: "AntHub - Auto Service Customers Can Track and Trust",
    template: "%s | AntHub",
  },
  description:
    "AntHub connects auto shops and car owners through QR intake, appointment chat, mechanic photo updates, service approvals, vehicle history, and reminders.",
  icons: {
    icon: [{ url: "/anthub-icon.png", type: "image/png" }],
    apple: [{ url: "/anthub-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "AntHub - Auto Service Customers Can Track and Trust",
    description:
      "AntHub connects auto shops and car owners through QR intake, mechanic updates, approvals, service history, and reminders.",
    url: "https://anthub.ca",
    siteName: "AntHub",
    images: [
      {
        url: "/anthub-front-counter-hero.png",
        width: 1792,
        height: 1024,
        alt: "Driver scanning a QR code at an auto service counter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AntHub - Auto Service Customers Can Track and Trust",
    description:
      "AntHub connects auto shops and car owners through QR intake, mechanic updates, approvals, service history, and reminders.",
    images: ["/anthub-front-counter-hero.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
