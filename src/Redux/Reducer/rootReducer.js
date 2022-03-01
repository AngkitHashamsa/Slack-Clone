import chatReducer from "./chat/singleChatReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  chat: chatReducer,
  loggedUser: userReducer,
});

export default rootReducer;
