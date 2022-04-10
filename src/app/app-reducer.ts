import {TaskType, todolistsAPI} from "../api/todolists-api";
import {Dispatch} from "redux";
import {UpdateDomainTaskModelType} from "../features/TodolistsList/tasks-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

// actions
export const setAppStatusAC = (status: string) => ({type: 'APP-STATUS', status} as const)

// thunks



export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            const tasks = res.data.items
            const action = setTasksAC(tasks, todolistId)
            dispatch(action)
        })
}


type ActionsType = any