import React from 'react';
import EventItem from './EventItem';

const Events = ({ children }) => {
  return (
    <section className="events mt-2">
      <h3 className="text-center">Events</h3>
      <EventItem />
    </section>
  );
};

export default Events;
