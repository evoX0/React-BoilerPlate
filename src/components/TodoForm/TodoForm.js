import React, { PureComponent } from "react";

const apiUrl = "http://localhost:3001/api/todo/";

class Some extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(apiUrl);
    const todo = await res.json();
    this.setState({...this.state, todos: todo.data});
  }

  mapTodos() {
    const { todos } = this.state;
    return todos.map(({title, description, id}) => (
      <ul key={id}>
        <li>{title}</li>
        <li>{description}</li>
      </ul>
    ));
  }

  render() {
    return (
     <div>
       {this.mapTodos()}
     </div>
   );
  }
}

export default Some
