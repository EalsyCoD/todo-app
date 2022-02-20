import styled from 'styled-components'

export const Container = styled.div``

export const ListTask = styled.ul`
  width: 100%;
  list-style: none;
  border-radius: 5px;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 10px 10px 30px 5px ;
  background-color: ${(props) => props.theme.colors.bgInput};
  font-size: 1rem;
  margin-top: 35px;
  color: gray;
  margin-left: -25px;
`

export const BtnCheck = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 1.5em;
  border: 1.5px solid ${(props) => props.theme.colors.textBorderTable};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bgInput};
  cursor: pointer;
  
`
export const BtnCompleted = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 1.5em;
  border: 1.5px solid ${(props) => props.theme.colors.textBorderTable};
  background-image: url(${(props) => props.theme.colors.IconCheck});
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bgCheck};
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover{
    border-color: ${(props) => props.theme.colors.bgCheck};
  }
`

export const TextTask = styled.p`
  width: 78%;
  @media (min-width: 600px) {
    & {
      width: 83%;
    }
  }

`

export const BtnDelete = styled.p`
  & {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('./images/icon-cross.svg');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  @media (min-width: 635px) {
    
    
  }
`
export const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 20px 25px;
  border-bottom: 1px solid ${(props) => props.theme.colors.textBorderTable};
  @media (min-width: 635px) {
    &:hover ${BtnDelete} {
     display: block;
  
    }
  }
`