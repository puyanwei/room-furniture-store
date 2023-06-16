"use client"

import { Component } from "@/shared/types"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export type NavbarLinks = {
  name: string
  href: string
}

interface NavbarProps extends Component {
  data: NavbarLinks[]
}

export function Navbar({ className = "", data, testId }: NavbarProps) {
  return (
    <>
      <DesktopNavbar className={`hidden md:flex ${className}`} testId={testId} data={data} />
      <MobileNavbar className={`md:hidden ${className}`} testId={testId} data={data} />
    </>
  )
}
