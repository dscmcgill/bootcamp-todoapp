import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import theme from '../utils/theme';

const useStyles = makeStyles((theme) => ({
    deleteButton: theme.deleteButton,
    completeButton: theme.completeButton,
    taskColor: {
        backgroundColor: '#444444',
    },
    title: {
        color: theme.colors.blue,
    },
    decription: {
        color: theme.colors.white,
    },
}));

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
    const classes = useStyles();
    const check_status = todo.status
        ? { textDecoration: 'line-through', color: 'grey' }
        : '';
    const complete_button = todo.status ? (
        <></>
    ) : (
        <Button
            className={classes.completeButton}
            onClick={() => updateTodo(todo)}
        >
            Complete
        </Button>
    );
    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ margin: '5px 0px' }}
            >
                <Grid item xs={8} sm={4}>
                    <Card className={classes.taskColor}>
                        <Grid container justify='center'>
                            <Grid item sm={8}>
                                <CardContent>
                                    <Grid container direction='row'>
                                        <Grid item sm={6}>
                                            <Typography
                                                className={classes.title}
                                                style={{ ...check_status }}
                                            >
                                                {todo.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography
                                                className={classes.decription}
                                                style={{ ...check_status }}
                                            >
                                                {todo.description}
                                            </Typography>
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
                                        className={classes.deleteButton}
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
