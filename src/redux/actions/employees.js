import * as api from "../../api/employees";
import ActionTypes from "../constants";
import { handleError } from "../actions/errors";

//Action Creators
export const getAllEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.getAllEmployees();
    dispatch({ type: ActionTypes.FETCH_ALL_EMPLOYEES, payload: data });
  } catch (error) {
    dispatch(handleError(error));
    console.log(error);
  }
};

export const getSingleEmployeeFromDB = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleEmployee(id);
    dispatch({ type: ActionTypes.FETCH_SINGLE_EMPLOYEE, payload: data });
  } catch (error) {
    dispatch(handleError(error));
    console.log("Could Get Single Employee From DB", error);
  }
};
export const getSingleEmployeeFromState = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleEmployee(id);
    dispatch({ type: ActionTypes.FETCH_SINGLE_EMPLOYEE, payload: data });
  } catch (error) {
    dispatch(handleError(error));
    console.log("Could Get Single Employee State", error);
  }
};

export const createNewEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.createNewEmployee(employee);
    dispatch({ type: ActionTypes.CREATE_EMPLOYEE, payload: data });
  } catch (error) {
    dispatch(handleError(error));
    console.log(error);
  }
};
