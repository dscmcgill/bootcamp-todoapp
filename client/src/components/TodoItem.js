import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
    const complete_button = todo.status ? (
        <></>
    ) : (
        <Button onClick={() => updateTodo(todo)}>Complete</Button>
    );
    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <Grid item xs={8} sm={4}>
                    <Card>
                        <Grid container justify='center'>
                            <Grid item sm={8}>
                                <CardContent>
                                    <Grid container direction='row'>
                                        <Grid item sm={6}>
                                            <Typography>name</Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography>Description</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            <Grid
                                container
                                justify='flex-end'
                                alignItems='center'
                                sm={4}
                            >
                                <CardActions>
                                    {complete_button}
                                    <Button
                                        onClick={() => deleteTodo(todo._id)}
                                    >
                                        DELETE
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
