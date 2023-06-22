import type { Meta, StoryObj } from "@storybook/react"
import { Heading as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography/Headings",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Headings: Story = {
  render: () => (
    <div>
      <Component level="h1">Large Heading</Component>
      <Component level="h2">Medium Subheading</Component>
    </div>
  ),
}
