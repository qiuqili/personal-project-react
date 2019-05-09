import React from "react";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", events: [] };
  }

  onSubmit = event => {
    if (event) event.preventDefault();
    const name = event.target.children[0].value;
    this.setState({ name });
    fetch("https://api.github.com/users/" + name + "/events")
      .then(response => response.json())
      .then(data => this.setState({ events: data }));
  };

  render() {
    const { name } = this.state;

    return (
      <main className="App">
        {name ? (
          <EventLists events={this.state.events} />
        ) : (
          <LoginForm onSubmit={this.onSubmit} />
        )}
      </main>
    );
  }
}

export default App;
