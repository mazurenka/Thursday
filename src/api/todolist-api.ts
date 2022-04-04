import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b2d25b10-75d3-4d4a-a513-a9de8b4b57cf'
    }
})

type GetTodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type CommonResponseType<T = {}> = {
    resultCode: 0 | 1 | 10
    fieldsError: string[]
    messages: string[]
    data: T
}

export const todolistApi = {
    getTodos() {
        return instance.get<Array<GetTodoType>>('todo-lists')
    },
    createTodos(title: string) {
        return instance.post<CommonResponseType<{ item: GetTodoType }>>('todo-lists', {title})
    },
    deleteTodos(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodos(title: string, todolistId: string) {
        return instance.put<CommonResponseType>(`${todolistId}`, {title})
    }
}