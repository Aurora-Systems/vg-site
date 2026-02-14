import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Inter, Poppins } from "next/font/google"
import "../globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
