import Titulo from '../../components/titulo'
import Paragrafo from '../../components/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ad
      excepturi quo porro. Temporibus, perferendis in quam sapiente pariatur
      autem nulla libero doloremque dicta, odio nemo explicabo corporis
      repudiandae ullam!
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=ViniSilv27&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ViniSilv27&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
