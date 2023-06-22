import Image from "next/image"
import { Component } from "@/shared/types"
import { Text } from "@/components/1-atoms/typography/Text"
import { Heading } from "@/components/1-atoms/typography/Heading"

interface DescriptionSectionProps extends Component {}

export function DescriptionSection({ className }: DescriptionSectionProps) {
  return (
    <div className={`sm:text-center ${className}`}>
      <Image
        className="object-cover w-full aspect-video"
        src="/assets/image-about-dark.jpg"
        alt="Two fabric coffee table chairs"
        key="Two fabric coffee table chairs"
        height={360}
        width={375}
      />
      <div className="p-8">
        <Heading className="py-4 uppercase bold" level="h2">
          About Our Furniture
        </Heading>
        <Text>
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream
          space.
        </Text>
      </div>
      <Image
        className="object-cover w-full aspect-video"
        src="/assets/image-about-light.jpg"
        alt="A plastic white chair"
        key="A plastic white chair"
        height={360}
        width={375}
      />
    </div>
  )
}
