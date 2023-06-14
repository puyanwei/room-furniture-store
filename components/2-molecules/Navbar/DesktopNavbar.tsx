import { Component } from "@/shared/types"
import { NavbarLinks } from "."
import { Logo } from "@/components/1-atoms/Icons/Logo"
import Link from "next/link"

interface DesktopNavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function DesktopNavbar<DataType extends NavbarLinks[]>({
  className = "",
  data,
  testId,
}: DesktopNavbarProps<DataType>) {
  return (
    <div className={`p-8 flex justify-between ${className}`}>
      <Link href="/" className="flex items-center">
        <Logo />
      </Link>
      <nav className={`text-white space-x-12 ${className}`} data-testid={testId}>
        {data.map(({ href, name }, index) => (
          <Link
            className="hover:underline underline-offset-[16px] decoration-2"
            href={href}
            key={`${index}-${name}`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
