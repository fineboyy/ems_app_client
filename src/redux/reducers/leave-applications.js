import ActionTypes from "../constants";


export const leavesReducer = (leaves = [], {type, payload}) => {

    switch(type) {
        case ActionTypes.FETCH_ALL_LEAVE_APLLICATIONS:
            return payload
        
        default:
            return leaves;
    }
}