import {
  SET_NAME,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS
} from "./actions";

const defaultState = {
  name: "",
  events: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case FETCH_EVENTS_REQUEST:
      return { ...state };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.events };
    default:
      return state;
  }
};

export default reducer;
