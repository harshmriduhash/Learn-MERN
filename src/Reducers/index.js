import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import event from './event';

export default combineReducers({
    alert,
    auth,
    event
});