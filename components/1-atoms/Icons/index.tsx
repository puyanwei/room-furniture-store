import { Component } from "@/shared/types"

interface IconProps extends Component {
  icon: JSX.Element
}

export function Icon({ className = ``, icon }: IconProps) {
  return <span className={`flex shrink-0 items-center pr-1 ${className}`}>{icon}</span>
}
