/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'


const initTasks = () => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
      try {
        const res = await axios.get('/tasks')
        dispatch({
          type: 'INIT-TASKS',
          payload: res.data,
        })
      } catch (err) {}
    }
  }

const deleteTask = (id: number) => {
    return async (dispatch: (arg0: { type: string; payload: number }) => void) => {
      try {
        await axios.delete(`/tasks/${id}`)
        dispatch({
          type: 'DELETE-TASKS',
          payload: id,
        })
      } catch (err) {}
    }
  }

  const checkTask = (task: any) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
      try {
        const res = await axios.put(`/tasks/${task.id}`, {
          task: task.task,
          completed: !task.completed,
        })
        dispatch({
          type: 'CHECK-TASKS',
          payload: task.id,
        })
      } catch (err) {}
    }
  }

const taskAdd = (newTask: any) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
      try {
        const res = await axios.post('/tasks', newTask)
        dispatch({
          type: 'ADD-TASKS',
          payload: res.data,
        })
      } catch (err) {}
    }
  }

const switchTask = (items: any) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
      dispatch({
         type: 'SWITCH-TASK', payload: items 
        })
    }
  }


  const Filter = (filter: any) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void, _getState: any)  => {
      dispatch({ 
        type: 'FILTER-TASKS', payload: filter
      })
    }
  }

  const Clear = () => {
    return async (dispatch: (arg0: { type: string; }) => void) => {
      dispatch({
        type: 'CLEAR-TASKS'
      })
    }
  }







export { initTasks, deleteTask, checkTask, taskAdd, switchTask, Clear, Filter}


