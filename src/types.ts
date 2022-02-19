export interface StateTask {
    tasks: TaskStateElement 
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
}
export type TaskStateReducer  = {
    filter : any
    tasks:  string | any
}


export type TaskTS ={
    tasks: any
    filter: []
}





