import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At excepturi, a
      harum ex similique et ad voluptates eligendi, architecto quaerat nostrum
      repudiandae, eaque adipisci. Excepturi corporis facere est atque fugit.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=uandyano&show_icons=true&theme=gotham&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=uandyano&layout=compact&langs_count=7&theme=gotham" />
    </GithubSecao>
  </section>
)

export default Sobre
