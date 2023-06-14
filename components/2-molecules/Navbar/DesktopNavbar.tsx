import { Component } from "@/shared/types"
import { NavbarLinks } from "."

interface DesktopNavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function DesktopNavbar<DataType extends NavbarLinks[]>({
  className,
  data,
  testId,
}: DesktopNavbarProps<DataType>) {
  return <div>desktop navbar</div>
}
