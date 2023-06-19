import Image from "next/image"
import { Component } from "@/shared/types"
import { Text } from "@/components/1-atoms/typography/Text"

interface DescriptionSectionProps extends Component {
  src: string
  alt: string
}

export function DescriptionSection({ className, src, alt }: DescriptionSectionProps) {
  return (
    <div className={className}>
      <div className="relative flex flex-col overflow-hidden h-72">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={src}
          alt={alt}
          key={alt}
          fill
        />
      </div>
      <Text>
        Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles or
        anything in between. Product specialists are available to help you create your dream space.
      </Text>
    </div>
  )
}
