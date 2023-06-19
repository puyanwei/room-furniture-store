import { ComponentWithChildren } from "@/shared/types"

interface TextProps extends ComponentWithChildren {}

export function Text({ children }: TextProps) {
  return <p className="text-xs font-normal text-neutral-400">{children}</p>
}
