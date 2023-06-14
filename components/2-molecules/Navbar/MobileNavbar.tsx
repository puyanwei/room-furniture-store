import { Component } from "@/shared/types"
import { NavbarLinks } from "."
import { Logo } from "@/components/1-atoms/Icons/Logo"
import Link from "next/link"

interface MobileNavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function MobileNavbar<DataType extends NavbarLinks[]>({
  className = "",
  data,
  testId,
}: MobileNavbarProps<DataType>) {
  return (
    <div className={`flex justify-between ${className}`}>
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
            {name} MOBILE
          </Link>
        ))}
      </nav>
    </div>
  )
}
