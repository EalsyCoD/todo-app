import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Clear, Filter } from '../../ducks/actions/taskAction'

import { StateTasks, TaskState } from '../../types'

import {
    Container,
    Counter,
    ButtonClear,
    PanelDST,
    PanelMBL,
    MobBtn

} from './styles'

const TaskFilter =() => {
    const dispatch = useDispatch()


    const tasks = useSelector ((state: TaskState) => {
        return state.tasks.tasks.filter((tasks: { completed: boolean  }) => !tasks.completed).lenght
    })


    const filter = useSelector((state: StateTasks) => state.tasks.filter)


    return (
        <Container>
            <PanelDST>
                
            </PanelDST>
            <PanelMBL>
            <Counter> {tasks} items left  </Counter>
            <ButtonClear onClick={() => {
                    dispatch(Clear())
                }}
                >Clear Completed</ButtonClear>
                {filter.map((item:any, i: number) => (
                <MobBtn color={item.active ? 'primary' : 'textBorderTable'}
                onClick={() => {
                    dispatch(Filter(item.title))
                }}
                key={i}
                >{item.title}</MobBtn> ))}
                </PanelMBL>
        </Container>

    )
}

export default TaskFilter