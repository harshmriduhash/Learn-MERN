import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentEvent } from '../../actions/event';

const EventItem = ({ getCurrentEvent, auth, event: { event } }) => {
  useEffect(() => {
    getCurrentEvent();
  }, [getCurrentEvent]);

  const events = event.map(list => {
    return <li key={list.id}>{list.event_name}</li>;
  });

  return (
    <div className="current-event d-flex justify-content-center align-items-center flex-column">
      <h4>{events}</h4>
      <p></p>
    </div>
  );
};

EventItem.propTypes = {
  getCurrentEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  event: state.event
});

export default connect(mapStateToProps, { getCurrentEvent })(EventItem);
