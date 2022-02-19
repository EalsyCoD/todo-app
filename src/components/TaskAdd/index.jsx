import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Container, Input, Button } from './styles'
import { taskAdd } from "../../ducks/actions/taskAction"


const TaskAdd = () =>{
    const dispatch = useDispatch()
    const [value, setValue] = useState('')


const handleAdd = () => {
  const newTask = {
    task: value,
    completed: false
  }
  dispatch(taskAdd(newTask))
  setValue('')
}


return (
    <Container>
      <Button onClick={handleAdd} />
      <Input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        placeholder={'Create a new todo…'}
      />
    </Container>
  )
}



export default TaskAdd