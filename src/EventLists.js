import React from "react";

import EventList from "./EventList";

const EventLists = props => {
  return (
    <section>
      <EventList events={props.events} type="ForkEvent" />
    </section>
  );
};

export default EventLists;
