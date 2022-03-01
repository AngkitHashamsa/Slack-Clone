import * as constant from "../../constants";
const initialState = {
  loggedUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
