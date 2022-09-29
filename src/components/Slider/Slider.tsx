import { ComponentProps, FC, memo } from 'react'
import { Slider as MuiSlider } from '@mui/material'

export const Slider: FC<ComponentProps<typeof MuiSlider>> = memo(function Slider(props) {
  return <MuiSlider {...props} />
})
