import { ThemeProvider } from 'styled-components'
import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import GlobalStyle, { Container } from './styles'
import darkTheme from './themes/dark'
import { useState } from 'react'
import lightTheme from './themes/light'

function App() {
  const [isItDark, setItsDark] = useState(false)

  function changeTheme() {
    setItsDark(!isItDark)
  }

  return (
    <ThemeProvider theme={isItDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
