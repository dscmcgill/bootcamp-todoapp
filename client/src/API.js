import axios from 'axios';

const baseUrl = 'http://localhost:3000';
// CRUD - CREATE READ UPDATE DELETE

// READ
export const getTodos = async () => {
    try {
        const todos = await axios.get(baseUrl + '/todos');
        return todos;
    } catch (error) {
        throw new Error(error);
    }
};

// CREATE
export const addTodo = async (formData) => {
    try {
        const todo = {
            title: formData.title,
            description: formData.description,
            status: false,
        };
        const saveTodo = await axios.post(baseUrl + '/todos', todo);
        return saveTodo;
    } catch (error) {
        throw new Error(error);
    }
};

// UPDATE
export const updateToDo = async (todo) => {
    try {
        const todoUpdate = {
            status: true,
        };
        const updatedTodo = await axios.put(
            `${baseUrl}/todos/${todo._id}`,
            todoUpdate
        );
        return updatedTodo;
    } catch (e) {
        throw new Error(e);
    }
};

// DELETE
export const deleteToDo = async (_id) => {
    try {
        const deleteTodo = await axios.delete(`${baseUrl}/todos/${_id}`);
        return deleteTodo;
    } catch (error) {
        throw new Error(error);
    }
};
