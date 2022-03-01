import { createAction } from "redux-actions";
import * as constants from "./constants";
export const getRoomName = createAction(constants.GET_ROOM_NAME);
export const getLoggedUser = createAction(constants.GET_LOGGED_USER);
