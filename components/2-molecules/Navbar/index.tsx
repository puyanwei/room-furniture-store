import { Component, NavbarLinks } from "@/shared/types"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

interface NavbarProps extends Component {
  data: readonly NavbarLinks[]
}

export function Navbar({ className = "", data, testId }: NavbarProps) {
  return (
    <>
      <DesktopNavbar className={`hidden lg:flex ${className}`} testId={testId} data={data} />
      <MobileNavbar className={`lg:hidden ${className}`} testId={testId} data={data} />
    </>
  )
}
