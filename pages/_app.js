import theme from '../styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
  <CssBaseline />
  <Component {...pageProps} />
</ThemeProvider>
}
