export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'APP/SET-ERROR':
            return {...state, error: action.error}

        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

// actions
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
export type setAppErrorAT = ReturnType<typeof setAppErrorAC>

type ActionsType = SetAppStatusAT | setAppErrorAT