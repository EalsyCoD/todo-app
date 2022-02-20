export interface StateTasks {
    tasks: TaskFilterTask
}

export type TaskFilterTask = {
    tasks: any
    filter: any
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

}





