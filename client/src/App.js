import React, { useEffect, useState } from 'react';
import './App.css';

import { getTodos, addTodo, updateToDo, deleteToDo } from './API';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = () => {
        getTodos()
            .then((formData) => {
                setTodos(formData.data);
            })
            .catch((error) => console.log(error));
    };

    // Add data
    const handleSaveTodo = (formData) => {
        addTodo(formData)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('To do not saved');
                }
                setTodos([...todos, data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Update data
    const handleUpdateTodo = (formData) => {
        updateToDo(formData)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('todo not Updated');
                }
                var index = todos.findIndex((i) => i._id == data._id);
                todos[index] = data;
                setTodos([...todos]);
            })
            .catch((error) => console.log(error));
    };

    // delete data
    const handleDeleteTodo = (_id) => {
        deleteToDo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('To do not Deleted');
                }
                setTodos(todos.filter((todo) => todo._id !== _id));
            })
            .catch((error) => console.log(error));
    };

    return <div>hello from App js</div>;
}

export default App;
