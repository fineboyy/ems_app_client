import ActionTypes from "../constants";


export const handleError = (error) => async (dispatch) => {

    switch(error.code) {
        case "ERR_NETWORK":
        case "ERR_BAD_RESPONSE":
            return dispatch({type: ActionTypes.NETWORK_ERROR, payload: error})

        default:
            return dispatch({type: ActionTypes.GENERIC_ERROR, payload: error })
    }
}