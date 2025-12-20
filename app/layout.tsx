import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CNH sem Auto Escola - Guia Completo 2025",
  description:
    "Descubra como tirar sua CNH sem gastar com auto escola. Guia completo atualizado com as novas regras do DETRAN.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* xTracky UTM Handler */}
        <Script
          src="https://cdn.jsdelivr.net/gh/xTracky/static@latest/utm-handler.js"
          data-token="ada9732e-a27b-430e-aa19-dbfe6181b719"
          strategy="afterInteractive"
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
