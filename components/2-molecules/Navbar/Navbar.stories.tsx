import type { Meta, StoryObj } from "@storybook/react"
import { Navbar as Component, NavbarLinks } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Navbar",
  component: Component,
}

const navbarLinks: NavbarLinks[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "shop",
    href: "/shop",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "contact",
    href: "/contact",
  },
]

export default meta
type Story = StoryObj<typeof Component>

export const Navbar: Story = {
  render: () => (
    <div>
      <Component data={navbarLinks} />
    </div>
  ),
}
