import styled from 'styled-components'

export const Container = styled.header`
  display:flex;
  justify-content: space-between;
  padding: 50px 30px 0px 0px;
  margin: auto;


  @media(min-width: 635px){
  width: 35rem;
  }
`
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`