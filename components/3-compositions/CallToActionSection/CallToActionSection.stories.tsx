import type { Meta, StoryObj } from "@storybook/react"
import { CallToActionSection as Component } from "."
import { furnitureInfo } from "@/shared/consts"

const meta: Meta<typeof Component> = {
  title: "Compositions/Call To Action Section",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

const { text, heading } = furnitureInfo[0]

export const CallToActionSection: Story = {
  render: () => (
    <div>
      <Component text={text} heading={heading} />
    </div>
  ),
}
