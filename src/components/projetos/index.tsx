import Paragrafo from '../paragrafo'
import Titulo from '../titulo'
import { Card, Linkbotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com Vue.js</Paragrafo>
      <Linkbotao>Visualizar</Linkbotao>
    </Card>
  )
}

export default Projeto
