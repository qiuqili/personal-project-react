const defaultState = {
  name: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

export default reducer;
