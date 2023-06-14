import type { Meta, StoryObj } from "@storybook/react"
import { Icon as Component } from "."
import { Logo } from "./Logo"

const meta: Meta<typeof Component> = {
  title: "Atoms/Icons",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Icons: Story = {
  render: () => (
    <div className="w-24 bg-black">
      <Component className="p-4" icon={<Logo />} />
    </div>
  ),
}
