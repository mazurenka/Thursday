import {setAppErrorAC, SetAppErrorAT, setAppStatusAC, SetAppStatusAT} from "../app/app-reducer";
import {Dispatch} from "redux";

export const handleServerNetworkError = (dispatch: Dispatch<ErrorStatusActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export type ErrorStatusActionsType = SetAppStatusAT | SetAppErrorAT