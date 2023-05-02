import { GlobalStyle } from './themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Menu } from './components/Menu'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Menu>
              <Router />
            </Menu>
          </CyclesContextProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
