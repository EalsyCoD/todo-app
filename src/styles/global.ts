import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
:root{
    --bgCheck: hsl(220, 98%, 61%);
  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
}

body{
    background: ${(props) => props.theme.colors.background};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.text};
}
`