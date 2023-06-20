import { ReactNode } from "react"

export type Component = {
  className?: string
  testId?: string
  styles?: string
}

export interface ComponentWithChildren extends Component {
  children: ReactNode
}

export type FurnitureInfo = Readonly<{
  src: string
  alt: string
  heading: string
  text: string
}>

export type NavbarLinks = Readonly<{
  name: string
  href: string
}>
