import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Becca Crochês - Peças Artesanais de Crochê",
  description:
    "Bolsas e acessórios de crochê artesanais. Cada peça é única, feita com carinho e atenção aos detalhes em Campo Grande, MS.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo.png", // sua logo como favicon
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.png",
        type: "image/png", // fallback para browsers que não suportam media queries
      },
    ],
    apple: "/images/logo.png", // ícone para dispositivos Apple
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
