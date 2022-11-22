import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    overflow-x: hidden;
    background-color: #0d1117;
    color: #fff;
  }
`