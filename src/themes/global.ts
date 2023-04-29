import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.secondary};
}

body {
  color: ${(props) => props.theme.text};
  -webkit-font-smoothing: antialiased;
  padding-bottom: 9.8125rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

}

input,  button, textarea {
  font-weight: 500;
}`
