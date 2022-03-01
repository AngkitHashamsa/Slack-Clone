import chatReducer from "./chat/singleChatReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  chat: chatReducer,
});

export default rootReducer;
