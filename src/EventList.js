import React from "react";

import ListLink from "./ListLink";

const EventList = props => {
  const rows = props.events
    .filter(event => event.type === props.type)
    .map(event => (
      <li key={event.id}>
        <ListLink
          url={"https://github.com/" + event.repo.name}
          name={event.repo.name}
        />
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
