import * as api from '../../api/leaves'
import ActionTypes from '../constants'
import { handleError } from './errors'

export const getAllLeaveApplications = () => async (dispatch) => {
    try {
        const { data } = await api.getAllLeaveApplications()
        console.log("DAta", data)
        dispatch({type: ActionTypes.FETCH_ALL_LEAVE_APLLICATIONS, payload: data})
    } catch (error) {
        dispatch(handleError(error));
        console.log(error)
    }
}