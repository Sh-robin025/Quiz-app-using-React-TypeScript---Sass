import { ActionType } from "../CONSTANTS";

const initialState = {
    clickedPost: {}
}

export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.CLICKED_POST:
            return { ...state, clickedPost: payload }
        default:
            return state;
    }
}