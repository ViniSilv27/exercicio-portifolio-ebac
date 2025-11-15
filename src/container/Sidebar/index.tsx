import Avatar from '../../components/avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/titulo'
import { BotaoTema, Descricao, RolagemSideBar } from './styles'

export type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <RolagemSideBar>
      <Avatar />
      <Titulo fontSize={20}>Vinicius Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ViniSilv27
      </Paragrafo>
      <Descricao tipo="principal">Full-Stack Java</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </RolagemSideBar>
  </aside>
)

export default Sidebar
