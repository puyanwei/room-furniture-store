import { ReactNode } from "react"

export type Component = {
  className?: string
  testId?: string
  styles?: string
}

export interface ComponentWithChildren extends Component {
  children: ReactNode
}

export type Images = Readonly<{
  src: string
  alt: string
}>

export type NavbarLinks = Readonly<{
  name: string
  href: string
}>
