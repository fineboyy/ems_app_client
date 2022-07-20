import ActionTypes from "../constants"

export const netWorkErrorReducer = ( error={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.NETWORK_ERROR:
            return payload;
        
        default:
        return error
    }
}