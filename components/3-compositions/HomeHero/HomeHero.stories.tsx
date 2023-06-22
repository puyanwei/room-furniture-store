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
      <Component
        width={840}
        height={534}
        src="/assets/desktop-image-hero-1.jpg"
        alt="two white chairs and a desk"
        handleBackButton={() => console.warn("Clicked back")}
        handleNextButton={() => console.warn("Clicked next")}
      />
    </div>
  ),
}
