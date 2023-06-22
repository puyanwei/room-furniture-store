import { Component } from "@/shared/types"

const headingStyles = {
  h1: "text-4xl lg:text-6xl",
  h2: "text-xs lg:text-xl tracking-[0.3em]",
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
