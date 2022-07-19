
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {
        --Very-Dark-Gray: hsl(0, 0%, 17%);
        --Dark-Gray: hsl(0, 0%, 59%);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

`