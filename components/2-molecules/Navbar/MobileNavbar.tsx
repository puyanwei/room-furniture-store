"use client"

import { useState } from "react"
import Link from "next/link"
import { Component, ComponentWithChildren, NavbarLinks } from "@/shared/types"
import { Logo } from "@/components/1-atoms/Icons/Logo"
import { Hamburger } from "@/components/1-atoms/Icons/Hamburger"
import { Icon } from "@/components/1-atoms/Icons"
import { Close } from "@/components/1-atoms/Icons/Close"

interface MobileNavbarProps extends Component {
  data: readonly NavbarLinks[]
}

export function MobileNavbar({ className = "", data, testId }: MobileNavbarProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`z-10 ${className}`}>
      {isMenuOpen ? (
        <OpenedMenu className="flex justify-between w-screen px-4 py-12 font-bold text-black bg-white">
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
        </OpenedMenu>
      ) : (
        <ClosedMenu className="flex justify-center w-screen px-4 py-2 pl-2">
          <button className="absolute pl-4 top-14 left-5" onClick={() => setMenuOpen(true)}>
            <Icon icon={<Hamburger />} />
          </button>
          <Link className="pt-12" href="/">
            <Logo />
          </Link>
        </ClosedMenu>
      )}
    </div>
  )
}

function OpenedMenu({ children, className }: ComponentWithChildren) {
  return <div className={className}>{children}</div>
}
function ClosedMenu({ children, className }: ComponentWithChildren) {
  return <div className={className}>{children}</div>
}
