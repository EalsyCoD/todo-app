import {AnyAction} from 'redux'
import { ThunkAction } from 'redux-thunk'
import { State, DispatchTaskType } from '../../types'


const initTasks = (
    task: string,
    completed: boolean
): ThunkAction<void, State, unknown, AnyAction> =>{
    return async(dispatch: DispatchTaskType ) =>{
        dispatch({
            type: 'INIT-TASKS',
            payload: {
                task: task,
                completed: completed
            }
        })
    }
}

export { initTasks }