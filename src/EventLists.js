import React from "react";

import EventList from "./EventList";

const EventLists = props => {
  return (
    <section>
      <EventList events={props.events} type="ForkEvent" />
      <EventList events={props.events} type="PullRequestEvent" />
    </section>
  );
};

export default EventLists;
