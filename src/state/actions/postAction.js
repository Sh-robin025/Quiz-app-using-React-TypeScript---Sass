import { ActionType } from "../CONSTANTS"

export const loadPost = allPost => {
    return {
        type: ActionType.LOAD_POST,
        payload: allPost,
    }
}

export const createPost = payload => {
    return {
        type: ActionType.SHOW_POPUP,
        payload: payload
    }
}

export const clickedPost = post => {
    return {
        type: ActionType.CLICKED_POST,
        payload: post,
    }
}