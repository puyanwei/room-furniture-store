import { Component } from "@/shared/types"

const headingVariants = {
  h1: "text-4xl",
  h2: "text-[100px]",
  h3: "text-[56px]",
  h4: "text-[32px]",
  h5: "text-[26px] tracking-[4.75px]",
} as const

type headingLevel = keyof typeof headingVariants

interface HeadingProps extends Component {
  children: string
  level: headingLevel
}

export function Heading({ className = "", children, level }: HeadingProps) {
  const Tag = level
  return <Tag className={`${headingVariants[level]} ${className}`}>{children}</Tag>
}
