import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

let settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'b2d25b10-75d3-4d4a-a513-a9de8b4b57cf'
    }
}

export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        promise.then((res) => {
            setState(res.data)
        })

    }, [])

    useEffect(() => {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'New Todo'}, settings)
        promise.then((res) => {
            setState(res.data)
        })

    }, [])

    useEffect(() => {
        const todolistId = '6f1847d8-22a5-46b4-9e8a-1920fb3b1132'
        let promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings )
        promise.then((res) => {
            setState(res.data)
        })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}