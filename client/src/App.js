import React, { useEffect, useState } from 'react';
import './App.css';

// components
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

// MUI
import Typography from '@material-ui/core/Typography';

// Theme
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './utils/theme';

import { getTodos, addTodo, updateToDo, deleteToDo } from './API';

const theme = createMuiTheme(themeFile);

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

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Typography
                        variant='h4'
                        component='h1'
                        style={{
                            textAlign: 'center',
                            margin: 50,
                            color: '#ffffff',
                        }}
                    >
                        My List of Todos
                    </Typography>
                    <AddTodo saveTodo={handleSaveTodo} />
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo._id}
                            todo={todo}
                            updateTodo={handleUpdateTodo}
                            deleteTodo={handleDeleteTodo}
                        />
                    ))}
                </div>
            </MuiThemeProvider>
        </>
    );
}

export default App;
