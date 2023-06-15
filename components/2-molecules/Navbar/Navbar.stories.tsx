import type { Meta, StoryObj } from "@storybook/react"
import { Navbar as Component } from "."
import { navbarLinks } from "@/shared/consts"

const meta: Meta<typeof Component> = {
  title: "Molecules/Navbar",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Navbar: Story = {
  render: () => (
    <div className="h-screen -m-4 bg-slate-800">
      <Component data={navbarLinks} />
    </div>
  ),
}
