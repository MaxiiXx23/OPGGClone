import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes.routes'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/themes/GlobalStyle'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
