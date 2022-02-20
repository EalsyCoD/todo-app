import styled from 'styled-components'


export const  Container = styled.div`
width: 100%;
height: 100%;
margin-left: -25px;
`


export const  PanelDST = styled.div`

`
export const  Counter = styled.p`
display: flex;
margin-right: 50px;
`
export const  ButtonClear = styled.p`
position: relative;
right: -240px;
&:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textTable};
  }
`

export const  PanelMBL = styled.div`
  display: flex;
  position: relative;
  justify-content: left;
  padding: 20px 15px 20px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bgInput};
  color: ${(props) => props.theme.colors.textBorderTable};
`
export const  MobBtn = styled.p`
display: flex;
padding-right: 10px;
padding-left: 5px;
position: relative;
right: 120px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textTable};
  }
`
