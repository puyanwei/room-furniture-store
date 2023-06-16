import "@/app/globals.css"

import { ReactNode } from "react"
import { League_Spartan } from "next/font/google"
import { Navbar } from "@/components/2-molecules/Navbar"
import { navbarLinks } from "@/shared/consts"

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const metadata = {
  title: "Room Furniture Store",
  description: "Furniture at a great price",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="grid h-screen bg-black" lang="en">
      <body className={spartan.className}>
        <Navbar data={navbarLinks} />
        {children}
      </body>
    </html>
  )
}
