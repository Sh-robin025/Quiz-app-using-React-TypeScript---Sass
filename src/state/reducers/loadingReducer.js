import { ActionType } from "../CONSTANTS";

const initialState = {
    isLoading: false
}

export const loadingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.LOADER:
            return { ...state, isLoading: payload }

        default:
            return state;
    }
}