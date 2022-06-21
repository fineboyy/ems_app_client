import * as api from '../api/deparments'

export const getAllDepartments = () => async (dispatch) => {
    try {
        const {data} = await api.getAllDepartments()
        dispatch({type: 'FETCH_DEPARTMENTS', payload: data})
    } catch (error) {
        console.log(error)
    }
}