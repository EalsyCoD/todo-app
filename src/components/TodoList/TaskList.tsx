

import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTask, deleteTask } from '../../ducks/actions/taskAction'



import {
    TaskContainer,
    BtnCompleted,
    TextTask,
    BtnCheck,
    BtnDelete,
} from './styles'


const TaskList = ({ task } : {task:any}) => {
    const dispatch = useDispatch()
    
        
const handleCheck = (task: string ) =>  {
    dispatch (checkTask(task))
}

const handleDelete = (id: number) => {
    dispatch(deleteTask(id))  
}

return(
    <React.Fragment>
        <TaskContainer>
      {task.completed ? (
        <BtnCompleted
          onClick={() => {
            handleCheck(task)
          }}
        />
      ) : (
        <BtnCheck
          onClick={() => {
            handleCheck(task)
          }}
        />
      )}

      <TextTask
        color={task.completed ? 'textBorderTable' : 'textTable'}

      >
        {task.task}
      </TextTask>

      <BtnDelete
        onClick={() => {
          handleDelete(task.id)
        }}
      />
    </TaskContainer>
    </React.Fragment>
  )
}
    


export default TaskList


