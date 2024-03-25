import { Title as Estilo } from './styles'

export type Props = {
  children: string
  //? - deixa de ser obrigatorio
  fontSize?: number
}

const Title = (props: Props) => (
  <Estilo fontSize={props.fontSize}>{props.children}</Estilo>
)

export default Title
