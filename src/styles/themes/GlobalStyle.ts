import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{ 
      margin: 0;
      padding: 0;
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   body{
      background-color: ${({ theme }) => theme['gray-100']};
      font-family: 'Roboto';
      font-size: 1rem;
      -webkit-font-smoothing: antialiased
   }
`
