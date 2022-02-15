import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { initTasks } from './ducks/actions/taskAction';

import { Container } from './styles/styles';

import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Header from './components/Header'

const App = (): JSX.Element =>{
 const dispatch = useDispatch()
 const [theme, setTheme] = React.useState<DefaultTheme>(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

useEffect(() => {
  dispatch (initTasks)
},[dispatch])

 return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
    <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
    </Container>
  </ThemeProvider>
)
}


export default App;
