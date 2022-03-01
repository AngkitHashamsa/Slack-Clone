import * as constant from "../../constants";
const initialState = {
  roomName: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ROOM_NAME:
      return {
        ...state,
        roomName: action.payload,
      };
    default:
      return state;
  }
};
export default chatReducer;
