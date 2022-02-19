import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${(props) =>
    props.theme.colors.backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media(min-width: 635px){
    background-image: url(${(props) =>
    props.theme.colors.backgroundDesktop});
    }
`

export const TodoContainer = styled.div`
margin: 0 auto;
  padding: 0 35px 0 35px;
  @media (min-width: 600px) {
    width: 37rem;
  }
`