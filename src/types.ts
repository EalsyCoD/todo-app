export interface StateTask {
    tasks: TaskStateElement 
}

export type TaskFilterTask = {
    tasks: any
    completed: string
}

export type TaskStateElement = {
    completed: string
    task: any
    id: number
    index: number | null
    filter: string
    tasks: [] | any
}

export type TaskAction = {
    type: string
    payload: TaskState 
}


export type TaskState  = {
    tasks:  string | any
    filter: any
}
export type TaskStateReducer  = {
    filter : any
    tasks:  string | any
}


export type TaskTS ={
    tasks: any
    filter: []
}





