import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { detail } from '../../actions/event';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Details = ({ detail, check2 }) => {
  const [formData, setFromData] = useState({
    quantity: '',
    price: '',
    description: '',
    photo: ''
  });

  const { quantity, price, description, photo } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    detail({ quantity, price, description, photo });
  };

  if (check2) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <section className="d-flex justify-content-center align-items-start">
      <div className="card card-width">
        <div className="card-header">
          <div className="card-text text-center">
            <h4>Event Details</h4>
          </div>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={e => onSubmit(e)}>
            <label htmlFor="Price">Price</label>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="price"
                value={price}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Quantity">Ticket Quantity</label>
              <input
                className="form-control"
                type="text"
                name="quantity"
                value={quantity}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <textarea
                className="form-control"
                type="textarea"
                name="description"
                value={description}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Photo">Photo</label>
              <br />
              <input type="file" name="photo" value={photo} onChange={e => onChange(e)} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Create Events</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Details.propTypes = {
  detail: PropTypes.func.isRequired,
  check2: PropTypes.bool
};

const mapStateToProps = state => ({
  check2: state.event.check2
});

export default connect(mapStateToProps, { setAlert, detail })(Details);
