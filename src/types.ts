export type DispatchTaskType =(
    args: TaskAction
) => TaskAction


export type TaskAction = {
    type: string
    payload: TaskState
}


export interface State {
task: TaskState
}

export type TaskState = {
    task: string | null
    completed: boolean | null
}
