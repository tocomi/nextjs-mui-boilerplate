import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Slider } from './Slider'
import { expect } from '@storybook/jest'

export default { component: Slider } as ComponentMeta<typeof Slider>

export const Index: ComponentStoryObj<typeof Slider> = {
  args: {
    sx: { width: 300, m: 4 },
    valueLabelDisplay: 'auto',
    defaultValue: 50,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.hover(canvas.getByRole('slider'))

    // NOTE: ホバーすると数値が表示される
    expect(canvas.getByText('50')).toBeInTheDocument()
  },
}
