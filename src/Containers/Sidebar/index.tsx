import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BotaoTema, Description, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Benji DEl Rei</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        @yoitsbenji
      </Paragrafo>
      <Description fontSize={12}>Desenvolvedor Full Stack</Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
