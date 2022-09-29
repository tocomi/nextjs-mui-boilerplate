import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c3879',
    },
    secondary: {
      main: '#607eaa',
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 2,
})

export default theme
