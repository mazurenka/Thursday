import axios from "axios";

export const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'b2d25b10-75d3-4d4a-a513-a9de8b4b57cf'
    }
}

export const todolistApi = {
    getTodos() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    createTodos(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteTodos(todolistId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodos(title: string, todolistId: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
    }
}