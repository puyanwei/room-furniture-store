"use client"

import { Component } from "@/shared/types"
import { DesktopNavbar } from "./DesktopNavbar"
import { useWindowSize } from "@/shared/hooks/useWindowSize"
import { MobileNavbar } from "./MobileNavbar"

export type NavbarLinks = {
  name: string
  href: string
}

interface NavbarProps<DataType extends NavbarLinks[]> extends Component<DataType> {
  data: DataType
}

export function Navbar<DataType extends NavbarLinks[]>({
  className = "",
  data,
  testId,
}: NavbarProps<DataType>) {
  const { width } = useWindowSize()

  if (!width) return null

  const isDesktopWidth = width > 1024
  return (
    <>
      {isDesktopWidth ? (
        <DesktopNavbar className={className} testId={testId} data={data} />
      ) : (
        <MobileNavbar className={className} testId={testId} data={data} />
      )}
    </>
  )
}
