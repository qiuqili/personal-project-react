import React from "react";

const LoginForm = props => {
  return (
    <section>
      <img
        src="https://github.githubassets.com/pinned-octocat.svg"
        alt="github logo"
      />
      <h2>Please enter your Github username:</h2>
      <form onSubmit={props.onSubmit}>
        <input type="text" name="username" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default LoginForm;
