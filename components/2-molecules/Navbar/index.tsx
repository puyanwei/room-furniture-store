import { Component } from "@/shared/types"
import { DesktopNavbar } from "./DesktopNavbar"

export type NavbarLinks = {
  name: string
  href: string
}

interface NavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function Navbar<DataType extends NavbarLinks[]>({
  className,
  data,
  testId,
}: NavbarProps<DataType>) {
  return <DesktopNavbar />
}
