import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const IconSwitch = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.theme.IconSwitch});
  background-repeat: no-repeat;
  background-position: center;

  &{
    cursor: pointer;
  }
`