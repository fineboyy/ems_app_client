import ActionTypes from "../constants";


export const employeesReducer = (employees = [], {type, payload}) => {

    switch(type) {
        case ActionTypes.FETCH_ALL_EMPLOYEES:
            return payload

            case ActionTypes.CREATE_EMPLOYEE:
                return [...employees, payload]

        
        
        default:
            return employees;
    }
}
export const singleEmployeeReducer = (employee = {}, action) => {

    switch(action.type) {
        case ActionTypes.CREATE_EMPLOYEE:
            case ActionTypes.GET_EMPLOYEE_FROM_STATE:
                case ActionTypes.GET_EMPLOYEE_FROM_DB:
            return action.payload
      
        default:
            return employee;
    }
}