import React from 'react'

import { Container, IconSwitch } from './styles'

interface Props {
  toggleTheme(): void
  titleTheme: string
}

const Switch: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      <IconSwitch />
    </Container>
  )
}
  export default Switch