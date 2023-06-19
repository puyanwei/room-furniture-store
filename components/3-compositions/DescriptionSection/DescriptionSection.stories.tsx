import type { Meta, StoryObj } from "@storybook/react"
import { DescriptionSection as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Compositions/Description Section",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const DescriptionSection: Story = {
  render: () => (
    <div>
      <Component src="/assets/image-about-dark.jpg" alt="Two fabric coffee table chairs" />
    </div>
  ),
}
