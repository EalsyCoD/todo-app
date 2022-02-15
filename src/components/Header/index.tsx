import React from "react"

import Switch from '../Switch'

import { Container, Title } from './styles'

interface Props {
    toggleTheme(): void
    titleTheme: string
}

const Header: React.FC<Props> = ({toggleTheme, titleTheme}) => {
    return (
        <React.Fragment>
            <Container>
                <Title>T O D O</Title>
                <Switch toggleTheme={toggleTheme} titleTheme={titleTheme} />
            </Container>
        </React.Fragment>
    )
}






export default Header