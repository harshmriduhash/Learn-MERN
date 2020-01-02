import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { create } from '../../actions/event';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Create = ({ create, check }) => {
  const [formData, setFromData] = useState({
    createdBy: '',
    event_name: '',
    location: '',
    city: ''
  });

  const { createdBy, event_name, location, city } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    create({ createdBy, event_name, location, city });
  };

  if (check) {
    return <Redirect to="/dashboard/create-events-2" />;
  }

  return (
    <section className="d-flex justify-content-center align-items-start">
      <div className="card card-width">
        <div className="card-header">
          <div className="card-text text-center">
            <h4>Create Events</h4>
          </div>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={e => onSubmit(e)}>
            <label htmlFor="Created By">Organization</label>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="createdBy"
                value={createdBy}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Event Name">Event Name</label>
              <input
                className="form-control"
                type="text"
                name="event_name"
                value={event_name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Location</label>
              <input
                className="form-control"
                type="text"
                name="location"
                value={location}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Event Name">City</label>
              <input
                className="form-control"
                type="text"
                name="city"
                value={city}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Create.propTypes = {
  create: PropTypes.func.isRequired,
  check: PropTypes.bool
};

const mapStateToProps = state => ({
  check: state.event.check
});

export default connect(mapStateToProps, { setAlert, create })(Create);
