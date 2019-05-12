import React from "react";
import { connect } from "react-redux";

import { getStatus } from "./actions";

class PullRequestStatus extends React.Component {
  componentDidMount() {
    this.props.getStatus(this.props.url);
  }

  render() {
    if (this.props.status === undefined) {
      return "";
    }

    const {
      status: { merged, state }
    } = this.props;

    return (
      <span
        className={state === "closed" ? (merged ? "merged" : "closed") : "open"}
      />
    );
  }
}

function mapStateToProps({ statuses }, { url }) {
  return { status: statuses.find(status => url.includes(status.url)) };
}

function mapDispatchToProps(dispatch) {
  return {
    getStatus: url => dispatch(getStatus(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PullRequestStatus);
