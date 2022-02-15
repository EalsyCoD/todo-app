import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        IconSwitch: string


        colors: {
        background: string
        backgroundDesktop: string
        backgroundMobile: string
        text: string
        primary: string
        textTable: string
        textBorderTable: string
        }

    }
}