import { ActionType } from "../CONSTANTS"

export const isLoading = payload => {
    return {
        type: ActionType.LOADER,
        payload: payload
    }
}