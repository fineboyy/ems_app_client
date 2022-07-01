import * as api from '../api/employees'


//Action Creators
export const getAllEmployees = () => async (dispatch) => {
    try {
        const { data } = await api.getAllEmployees();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        if(error.name === 'AxiosError') {
            dispatch({type: 'AXIOSERROR'})
        }
        console.log(error)
    }
}

export const createNewEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createNewEmployee(employee)
        dispatch({type: 'CREATE', payload: data})
    } catch(error) {
        console.log(error)
    }
}