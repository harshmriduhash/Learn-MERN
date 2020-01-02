import { GET_EVENT, GET_ERROR, CREATE_EVENT, DETAIL_EVENT } from '../actions/types';

const initialState = {
  event: [],
  detail: [],
  loading: true,
  error: {},
  check: null,
  check2: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DETAIL_EVENT:
      return {
        ...state,
        detail: payload,
        event: [],
        check2: true,
        loading: false
      };
    case CREATE_EVENT:
      return {
        ...state,
        event: payload,
        loading: false,
        check: true
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false,
        check: null,
        check2: null
      };
    case GET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
