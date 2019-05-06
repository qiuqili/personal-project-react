import React from "react";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <LoginForm />
        <EventLists />
      </main>
    );
  }
}

export default App;
