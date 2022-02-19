import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Clear, Filter } from '../../ducks/actions/taskAction'

import { TaskFilterTask } from '../../types'

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


    const tasks = useSelector ((state: TaskFilterTask) => {
        return state.tasks.tasks.filter((tasks: { completed: any }) => !tasks.completed).lenght
    })


    const filter = useSelector((state: TaskFilterTask) => state.tasks.filter)


    return (
        <Container>
            <PanelDST>
                <Counter>
                    items left {tasks}
                </Counter>
                <ButtonClear onClick={() => {
                    dispatch(Clear())
                }}
                >Clear Completed</ButtonClear>
            </PanelDST>
            <PanelMBL>{filter.map((item:any, i: number) => (
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