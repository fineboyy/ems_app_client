import ActionTypes from "../constants";


export const departmentsReducer = (departments = [], action) => {
    switch(action.type) {
        case ActionTypes.FETCH_ALL_DEPARTMENTS:
        return action.payload;
        
        default:
        return departments;
    }
}
export const singleDepartmentReducer = (department = {}, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_SINGLE_DEPARTMENT:
        return action.payload;
        
        default:
        return department;
    }
}