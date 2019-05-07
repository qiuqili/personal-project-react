import React from "react";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  onSubmit = event => {
    if (event) event.preventDefault();
    const name = event.target.children[0].value;
    this.setState({ name });
  };

  render() {
    const { name } = this.state;

    return (
      <main className="App">
        {name ? <EventLists /> : <LoginForm onSubmit={this.onSubmit} />}
      </main>
    );
  }
}

export default App;
