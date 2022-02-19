import { TaskState, TaskAction, TaskStateReducer } from "../../types";


const initialState: TaskStateReducer  ={
  tasks: [],
  filter: [
    { title: 'All', active: true },
    { title: 'Active', active: false },
    { title: 'Completed', active: false },
  ],
}

const taskReducer = (
    state: TaskState = initialState,
    action: TaskAction
  ): TaskState => {
    switch (action.type) {
      case 'INIT-TASKS':
        return {
          ...state,
          tasks: action.payload
        }
        case 'DELETE-TASKS':
          return {
            ...state,
            tasks: state.tasks.filter((task: { id: TaskState; }) => task.id !== action.payload),
          }
          case 'CHECK-TASKS':
            return {
              
               ...state,
               tasks: state.tasks.map((task:any) =>
               task.id === action.payload
               ?{...task, completed: !task.completed}
               : task),
            }
            case 'ADD-TASKS':
              return{...state, tasks: [...state.tasks, action.payload]}
          
              case 'SWITCH-TASK':
                return{
                  ...state,
                  tasks: action.payload,
                }
                  case 'CLEAR-TASKS':
                    return{
                      ...state, tasks: state.tasks.filter((task:any) => !task.completed)
                    }
                    case 'FILTER-TASKS':
                      return {
                        ...state,
                        filter: state.filter.map((item: any) =>
                        item.title === action.payload
                        ? {...item, active: true}
                        : {...item, active: false}
                        ),
                      }
                      
          default:
            return state
          }
        }

export default taskReducer