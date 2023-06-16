import { Component } from "@/shared/types"
import { NavbarLinks } from "."
import { Logo } from "@/components/1-atoms/Icons/Logo"
import Link from "next/link"

interface DesktopNavbarProps extends Component {
  data: NavbarLinks[]
}

export function DesktopNavbar({ className = "", data, testId }: DesktopNavbarProps) {
  return (
    <div className={`p-8 flex ${className}`}>
      <Link href="/" className="flex items-center pr-16">
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
