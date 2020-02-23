import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #ADD8E6;
  }
  :root {
      font-size: 14px;

      @media (min-width: 768px) {
        font-size: 15px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }
`

export default Global
