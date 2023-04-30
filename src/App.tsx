import { GlobalStyle } from './themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { SideMenu } from './components/SideMenu'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <SideMenu>
              <Router />
            </SideMenu>
          </CyclesContextProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
