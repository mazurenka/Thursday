import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b2d25b10-75d3-4d4a-a513-a9de8b4b57cf'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get('todo-lists')
    },
    createTodos(title: string) {
        return instance.post('todo-lists', {title})
    },
    deleteTodos(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodos(title: string, todolistId: string) {
        return instance.put(`${todolistId}`, {title})
    }
}