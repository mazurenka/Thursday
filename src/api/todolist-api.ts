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
    deleteTodos() {
        const todolistId = '6f1847d8-22a5-46b4-9e8a-1920fb3b1132'
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodos(title: string) {
        const todolistId = '8dd0e718-c5d3-4803-89ce-bb3b040004e3'
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
    }
}