import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { switchTask } from '../../ducks/actions/taskAction'
import TaskList from './TaskList'

import { TaskTS } from '../../types'

import { Container, ListTask } from './styles'



const TodoList = (): JSX.Element => {
    const dispatch = useDispatch()
    const tasks = useSelector((state: TaskTS) => {
      const tasks = state.tasks.tasks 
      const filter = state.tasks.filter.filter((item: any) => item.active)[0].title

      if ('All' === filter) {
        return tasks
      } else if ('Active' === filter) {
        return tasks.filter((item: any) => !item.completed)
      } else if ('Completed' === filter) {
        return tasks.filter((item: any) => item.completed)
      }
  
      return tasks
    })

    const handleEnd = (result : any) =>{
        if(!result.destination) return

        const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    dispatch(switchTask(items))
    }

    return (
        <>
          <Container>
            <DragDropContext onDragEnd={handleEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ListTask
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {tasks.map((task:any, index:number) => {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskList task={task} />
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </ListTask>
                )}
              </Droppable>
            </DragDropContext>
          </Container>
        </>
      )
    }

export default TodoList