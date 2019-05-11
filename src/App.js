import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";
import { setName } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", events: [] };
  }

  onSubmit = event => {
    if (event) event.preventDefault();
    const name = event.target.children[0].value;
    this.props.setName(name);
    fetch("https://api.github.com/users/" + name + "/events")
      .then(response => response.json())
      .then(data => this.setState({ events: data }));
  };

  render() {
    const { events } = this.state;
    const { name } = this.props;

    return (
      <main className="App">
        {name ? (
          <EventLists events={events} />
        ) : (
          <LoginForm onSubmit={this.onSubmit} />
        )}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch(setName(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
