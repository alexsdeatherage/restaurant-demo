import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.restaurant.name} | ${siteConfig.restaurant.tagline}`,
    template: `%s | ${siteConfig.restaurant.name}`,
  },
  description: siteConfig.restaurant.shortDescription,
  generator: "v0.app",
  keywords: ["restaurant", "Italian food", "family dining", "local restaurant"],
  authors: [{ name: siteConfig.restaurant.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.restaurant.name,
    title: siteConfig.restaurant.name,
    description: siteConfig.restaurant.shortDescription,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
