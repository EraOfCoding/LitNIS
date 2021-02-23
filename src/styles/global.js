import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    body {
        align-items: center;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .grades-link {
        color: ${({ theme }) => theme.link_color};
    }
    .bookslist-link {
        color: ${({ theme }) => theme.link_color};
    }
`