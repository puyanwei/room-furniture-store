import { Heading } from "@/components/1-atoms/typography/Heading"
import { Text } from "@/components/1-atoms/typography/Text"
import { ShopButton } from "@/components/2-molecules/ShopButton"
import { Component } from "@/shared/types"

interface CallToActionSectionProps extends Component {
  text: string
  heading: string
}

export function CallToActionSection({ text, heading }: CallToActionSectionProps) {
  return (
    <div className="px-8 py-12 space-y-4">
      <Heading level="h1">{heading}</Heading>
      <Text className="h-28">{text}</Text>
      <ShopButton className="pt-6 pb-2" />
    </div>
  )
}
