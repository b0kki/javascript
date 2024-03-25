import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}
export default App
