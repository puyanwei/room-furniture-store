import { ComponentWithChildren } from "@/shared/types"

interface TextProps extends ComponentWithChildren {}

export function Text({ children, className = "" }: TextProps) {
  return (
    <p className={`text-sm font-normal leading-normal text-neutral-400 ${className}`}>{children}</p>
  )
}
