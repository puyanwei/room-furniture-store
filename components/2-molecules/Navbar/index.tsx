import { Component, NavbarLinks } from "@/shared/types"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

interface NavbarProps extends Component {
  data: readonly NavbarLinks[]
}

export function Navbar({ className = "", data, testId }: NavbarProps) {
  return (
    <>
      <DesktopNavbar className={`hidden md:flex ${className}`} testId={testId} data={data} />
      <MobileNavbar className={`md:hidden ${className}`} testId={testId} data={data} />
    </>
  )
}
