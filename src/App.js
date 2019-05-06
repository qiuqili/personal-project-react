import React from "react";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";

class App extends React.Component {
  onSubmit = event => {
    if (event) event.preventDefault();
    const input = event.target.children[0];
    console.log(input.value);
  };

  render() {
    return (
      <main className="App">
        <LoginForm onSubmit={this.onSubmit} />
        <EventLists />
      </main>
    );
  }
}

export default App;
