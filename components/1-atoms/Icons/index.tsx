import { Component } from "@/shared/types"

interface IconProps<DataType> extends Component<DataType> {
  icon: JSX.Element
}

export function Icon<DataType>({ className = ``, icon }: IconProps<DataType>) {
  return <span className={className}>{icon}</span>
}
