import { TaskState, TaskAction } from "../../types";


const initialState: TaskState ={
    task: null,
    completed: null,
}

const taskReducer = (
    state: TaskState = initialState,
    action: TaskAction
  ): TaskState => {
    switch (action.type) {
      case 'INIT-TASKS':
        return {
          task: action.payload.task,
          completed: action.payload.completed,
        }
        default:
            return state
    }
}

export default taskReducer