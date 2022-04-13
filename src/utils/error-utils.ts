import {setAppErrorAC, SetAppErrorAT, setAppStatusAC, SetAppStatusAT} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError = (dispatch: Dispatch<ErrorStatusActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<ErrorStatusActionsType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export type ErrorStatusActionsType = SetAppStatusAT | SetAppErrorAT