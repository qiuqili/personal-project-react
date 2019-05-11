import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import EventLists from "./EventLists";
import "./App.css";
import { setName, getEvents } from "./actions";

class App extends React.Component {
  onSubmit = event => {
    if (event) event.preventDefault();
    const name = event.target.children[0].value;
    this.props.setName(name);
    this.props.getEvents(name);
  };

  render() {
    const { name, events } = this.props;

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
    name: state.name,
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch(setName(name)),
    getEvents: name => dispatch(getEvents(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
