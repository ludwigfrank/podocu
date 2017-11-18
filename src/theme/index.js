import React from 'react'
import { breakpoints } from './breakpoints'
import { color } from './color'
import { grid } from './grid'
import { typo } from './typo'
import { ThemeProvider } from 'styled-components'

export const theme = {
    breakpoints,
    color,
    grid,
    typo
}


const WithTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}

export default WithTheme