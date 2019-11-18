import React, { useState, createRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const apiUrl = "https://node-express-t.herokuapp.com/api/todo";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export const UncontrolledTextField = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const classes = useStyles();
  let todoFormRef = createRef();

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value)
  };

  const addTodo = () => {
    fetch(apiUrl, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description})
    }).then(res => res.json())
      .then(({title = "", description = ""}) => { setTitle(title); setDescription(description);})
      .catch(err => console.error(err));
    todoFormRef.reset();
  };

  return (
    <form ref={el => todoFormRef = el} className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-title"
          label="Title"
          type="text"
          className={classes.textField}
          margin="normal"
          onChange={onTitleChange}
        />
        <TextField
          id="standard-description"
          label="Description"
          type="text"
          className={classes.textField}
          margin="normal"
          onChange={onDescriptionChange}
        />
        <Button
          variant="contained"
          className={classes.button}
          href="#"
          onClick={addTodo}
        >
          Add todo
        </Button>
      </div>
    </form>
  );
};
