import { ActionType } from "../CONSTANTS";
const initialState = {
    showPopUp: false
}

export const popUpReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SHOW_POPUP:
            return { ...state, showPopUp: payload }

        // case ActionType.CLOSE_POPUP:
        //     return { ...state, showPopUp: false }

        default:
            return state;
    }
}