import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eius!
      Magnam, modi. Quos iusto exercitationem atque quidem dolores porro placeat
      ad, tempore perspiciatis necessitatibus aliquid a voluptatibus est sint
      excepturi?
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=yoitsbenji&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yoitsbenji&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
