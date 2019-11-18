import React, { PureComponent } from "react";

import { UncontrolledTextField } from "./TodoItem";

const apiUrl = "https://node-express-t.herokuapp.com/api/todo";

class Some extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    const res = await fetch(apiUrl);
    const todo = await res.json();
    this.setState({...this.state, todos: todo.data});
  }

  deleteTodo(_id) {
    const { todos } = this.state;
    console.log(todos);
    fetch(`${apiUrl}/${_id}`, {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => this.setState({todos: todos.filter(todo => todo._id !== data._id )}))
      .catch(err => console.error(err));
  }

  mapTodos() {
    const { todos } = this.state;
    return todos.map(({title, description, _id}) => (
      <li key={_id}>
        { title }: { description }
        <button style={{marginLeft: 15}} onClick={() => this.deleteTodo(_id)}>delete</button>
      </li>
    ));
  }

  render() {
    return (
     <div>
       <ul>{this.mapTodos()}</ul>
       <UncontrolledTextField />
     </div>
   );
  }
}

export default Some;
