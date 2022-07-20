import * as api from '../../api/deparments'
import ActionTypes from '../constants'
import { handleError } from './errors'

export const getAllDepartments = () => async (dispatch) => {
    try {
        const {data} = await api.getAllDepartments()
        dispatch({type: ActionTypes.FETCH_ALL_DEPARTMENTS, payload: data})
    } catch (error) {

        dispatch(handleError(error));
        console.log(error)
    }
}