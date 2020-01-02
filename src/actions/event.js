import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_EVENT,
  GET_ERROR,
  CREATE_EVENT,
  CREATE_ERROR,
  DETAIL_EVENT,
  DETAIL_ERROR
} from './types';

// GET CURRENT USERS EVENT
export const getCurrentEvent = () => async dispatch => {
  try {
    const res = await axios.get('/api/events');
    dispatch({
      type: GET_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create Events
export const create = ({ createdBy, event_name, location, city }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ createdBy, event_name, location, city });

  try {
    const res = await axios.post('/api/events', body, config);

    dispatch({
      type: CREATE_EVENT,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CREATE_ERROR
    });
  }
};

export const detail = ({ quantity, price, description, photo }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ quantity, price, description, photo });

  try {
    const res = await axios.post('/api/eventDetails', body, config);

    dispatch({
      type: DETAIL_EVENT,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: DETAIL_ERROR
    });
  }
};
