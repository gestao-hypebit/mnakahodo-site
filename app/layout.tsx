import type React from "react"
import type { Metadata } from "next"
import { Cambo as Campora, Urbanist, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const campora = Campora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-campora",
})

const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-urbanist",
})

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "MNAKAHODO - Consultoria em Economia e Finanças",
  description:
    "Palestras, workshops e consultoria especializada em economia empresarial e educação financeira pessoal.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${campora.variable} ${urbanist.variable} ${montserrat.variable} bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
