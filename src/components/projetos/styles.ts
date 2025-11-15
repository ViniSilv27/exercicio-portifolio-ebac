import { styled } from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const Linkbotao = styled.a`
  color: ${(props) => props.theme.corBotao};
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
