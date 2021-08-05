import { ActionType } from "../CONSTANTS";

const initialState = {
    post: []
}

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.LOAD_POST:
            return { ...state, post: payload }
        default:
            return state;
    }
}