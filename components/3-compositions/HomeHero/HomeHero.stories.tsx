import type { Meta, StoryObj } from "@storybook/react"
import { HomeHero as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Compositions/Home Hero",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const HomeHero: Story = {
  render: () => (
    <div className="h-screen">
      <Component />
    </div>
  ),
}
