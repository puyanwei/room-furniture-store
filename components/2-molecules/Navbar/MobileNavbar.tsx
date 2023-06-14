import { useState } from "react"
import Link from "next/link"
import { Component } from "@/shared/types"
import { NavbarLinks } from "."
import { Logo } from "@/components/1-atoms/Icons/Logo"
import { Hamburger } from "@/components/1-atoms/Icons/Hamburger"
import { Icon } from "@/components/1-atoms/Icons"
import { Close } from "@/components/1-atoms/Icons/Close"

interface MobileNavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function MobileNavbar<DataType extends NavbarLinks[]>({
  className = "",
  data,
  testId,
}: MobileNavbarProps<DataType>) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {isMenuOpen ? (
        <div className="flex justify-between w-full px-4 py-16 font-bold text-black bg-white">
          <button className="pl-4" onClick={() => setMenuOpen(false)}>
            <Icon icon={<Close />} />
          </button>
          <nav className={`space-x-8 pr-4 ${className}`} data-testid={testId}>
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
      ) : (
        <div className="flex justify-center px-4 py-6 pl-2">
          <button className="absolute pl-4 top-[72px] left-5" onClick={() => setMenuOpen(true)}>
            <Icon icon={<Hamburger />} />
          </button>
          <Link className="pt-12" href="/">
            <Logo />
          </Link>
        </div>
      )}
    </div>
  )
}
