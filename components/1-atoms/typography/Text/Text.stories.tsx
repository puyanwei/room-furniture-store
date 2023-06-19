import type { Meta, StoryObj } from "@storybook/react"
import { Text as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography/Text",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Text: Story = {
  render: () => (
    <div>
      <Component>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quaerat laborum iste
        omnis. Reprehenderit, itaque maxime, odio ex eveniet harum cupiditate nulla, qui dignissimos
        debitis aliquam ipsam ducimus necessitatibus facere!
      </Component>
    </div>
  ),
}
