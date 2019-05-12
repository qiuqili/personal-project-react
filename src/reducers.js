import {
  SET_NAME,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_SUCCESS
} from "./actions";

const defaultState = {
  name: "",
  events: [],
  statuses: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case FETCH_EVENTS_REQUEST:
      return { ...state };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.events };
    case FETCH_STATUS_REQUEST:
      return { ...state };
    case FETCH_STATUS_SUCCESS:
      return { ...state, statuses: [...state.statuses, action.status] };
    default:
      return state;
  }
};

export default reducer;
