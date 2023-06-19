import type { Meta, StoryObj } from "@storybook/react"
import { ShopButton as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Shop Button",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const ShopButton: Story = {
  render: () => (
    <div>
      <Component />
    </div>
  ),
}
