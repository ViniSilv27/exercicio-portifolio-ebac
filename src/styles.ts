import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;


  }


`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  padding-top: 80px;
  font-family: 'Inter', sans-serif;
  list-style: none;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
    padding-top: 16px;
  }

  img {
    max-width: 100%;
  }
`
