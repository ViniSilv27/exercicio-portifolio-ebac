import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonte principal */
  body {
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.corDefundo};
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 130px auto;
  column-gap: 56px;
  padding-top: 80px;
  padding-bottom: 80px;
  font-family: 'Inter', sans-serif;
  list-style: none;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
    padding-top: 16px;
  }
`
