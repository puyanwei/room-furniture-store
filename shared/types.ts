import { ReactNode } from "react"

export type Component = {
  className?: string
  testId?: string
  styles?: string
}

export interface HasChildren extends Component {
  children: ReactNode
}
