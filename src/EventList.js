import React from "react";

import ListLink from "./ListLink";
import PullRequestStatus from "./PullRequestStatus";

const EventList = props => {
  const rows = props.events
    .filter(event => event.type === props.type)
    .map(event => (
      <li key={event.id}>
        {props.type === "PullRequestEvent" ? (
          <>
            <ListLink
              url={event.payload.pull_request.html_url}
              name={event.payload.pull_request.title}
            />
            <PullRequestStatus url={event.payload.pull_request.url} />
          </>
        ) : (
          <ListLink
            url={"https://github.com/" + event.repo.name}
            name={event.repo.name}
          />
        )}
      </li>
    ));

  return (
    <ul>
      <h2>{props.type}</h2>
      {rows}
    </ul>
  );
};

export default EventList;
