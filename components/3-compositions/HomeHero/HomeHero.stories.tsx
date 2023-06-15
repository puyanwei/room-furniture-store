import type { Meta, StoryObj } from "@storybook/react"
import { HomeHero as Component } from "./HomeHero"

const meta: Meta<typeof Component> = {
  title: "Compositions/HomeHero",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const HomeHero: Story = {
  render: () => (
    <div>
      <Component />
    </div>
  ),
}
