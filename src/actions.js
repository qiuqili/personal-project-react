export const SET_NAME = "SET_NAME";

export const FETCH_EVENTS_REQUEST = "FETCH_EVENTS_REQUEST";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";

export const FETCH_STATUS_REQUEST = "FETCH_STATUS_REQUEST";
export const FETCH_STATUS_SUCCESS = "FETCH_STATUS_SUCCESS";

export const setName = name => {
  return {
    type: SET_NAME,
    name
  };
};

const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST
  };
};

const fetchEventsSuccess = events => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    events
  };
};

const fetchStatusRequest = () => {
  return {
    type: FETCH_STATUS_REQUEST
  };
};

const fetchStatusSuccess = status => {
  return {
    type: FETCH_STATUS_SUCCESS,
    status
  };
};

export const getEvents = name => {
  return function(dispatch) {
    dispatch(fetchEventsRequest());
    fetch("https://api.github.com/users/" + name + "/events")
      .then(response => response.json())
      .then(data => {
        dispatch(fetchEventsSuccess(data));
      });
  };
};

export const getStatus = url => {
  return function(dispatch) {
    dispatch(fetchStatusRequest());
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchStatusSuccess(data));
      });
  };
};
