import { combineReducers } from "redux";
import { detailsReducer } from "./detailReducer";
import { loadingReducer } from "./loadingReducer";
import { popUpReducer } from "./popUpReducer";
import { postReducer } from "./postReducer";

export const reducers = combineReducers({
    loading: loadingReducer,
    allPost: postReducer,
    showPopUp: popUpReducer,
    selectedPost: detailsReducer
})