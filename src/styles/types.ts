import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        IconSwitch: string

        colors: {
        bgCheck: string
        IconCheck: string
        background: string
        backgroundDesktop: string
        backgroundMobile: string
        bgInput: string
        text: string
        primary: string
        textTable: string
        textBorderTable: string
        }

    }
}