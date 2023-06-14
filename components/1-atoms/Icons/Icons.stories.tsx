import type { Meta, StoryObj } from "@storybook/react"
import { Icon as Component } from "."
import { Logo } from "./Logo"
import { Hamburger } from "./Hamburger"
import { Close } from "./Close"
import { Arrow } from "./Arrow"
import { AngleLeft } from "./AngleLeft"
import { AngleRight } from "./AngleRight"

const meta: Meta<typeof Component> = {
  title: "Atoms/Icons",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Icons: Story = {
  render: () => (
    <div className="w-24 space-y-4">
      <Component className="p-4 bg-black" icon={<Logo />} />
      <Component className="p-4 bg-black" icon={<Hamburger />} />
      <Component className="p-4" icon={<Close />} />
      <Component className="p-4" icon={<Arrow />} />
      <Component className="p-4 bg-black" icon={<AngleLeft />} />
      <Component className="p-4 bg-black" icon={<AngleRight />} />
    </div>
  ),
}
