import { Component } from "@/shared/types"

const headingStyles = {
  h1: "text-4xl",
  h2: "text-xs tracking-[0.3em]",
  h3: "text-[56px]",
  h4: "text-[32px]",
  h5: "text-[26px] tracking-[4.75px]",
} as const

type headingLevel = keyof typeof headingStyles

interface HeadingProps extends Component {
  children: string
  level: headingLevel
}

export function Heading({ className = "", children, level }: HeadingProps) {
  const Tag = level
  return <Tag className={`${headingStyles[level]} ${className}`}>{children}</Tag>
}
