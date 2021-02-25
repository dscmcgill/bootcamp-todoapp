import React, { useState } from 'react';

// MUI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#444444',
    },
    addButton: theme.addButton,
}));

export default function AddTodo({ saveTodo }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({ name: '', description: '' });

    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleOnClick = () => {
        if (formData.name == '' || formData.description == '') {
            return;
        }
        saveTodo(formData);
        setFormData({ name: '', description: '' });
    };
    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ margin: '20px 0px' }}
            >
                <Grid item xs={12} sm={4}>
                    <Card className={classes.background}>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                        >
                            <Grid
                                container
                                direction='row'
                                justify='center'
                                alignItems='center'
                                item
                                sm={8}
                                xs={12}
                            >
                                <CardContent>
                                    <form>
                                        <Grid
                                            container
                                            direction='row'
                                            justify='center'
                                            alignItems='center'
                                        >
                                            <Grid item sm={6}>
                                                <TextField
                                                    name='body'
                                                    type='text'
                                                    id='name'
                                                    label='Task'
                                                    variant='outlined'
                                                    placeholder='Task'
                                                    value={formData.name}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleForm}
                                                    InputLabelProps={{
                                                        style: {
                                                            color: '#ffffff',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item sm={6}>
                                                <TextField
                                                    name='body'
                                                    type='text'
                                                    id='description'
                                                    label='Decsription'
                                                    variant='outlined'
                                                    placeholder='Description'
                                                    value={formData.description}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleForm}
                                                    InputLabelProps={{
                                                        style: {
                                                            color: '#ffffff',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Grid>
                            <Grid
                                item
                                sm={3}
                                container
                                direction='row'
                                justify='center'
                                alignItems='center'
                            >
                                <CardActions>
                                    <Button
                                        className={classes.addButton}
                                        onClick={() => handleOnClick()}
                                    >
                                        Add Task
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
