import { combineReducers } from "redux";

import { employeesReducer, singleEmployeeReducer } from "./employees";
import {
  departmentsReducer,
  singleDepartmentReducer,
} from "./departments";
import { loading } from "./loader";
import { netWorkErrorReducer } from "./errors";

export default combineReducers({
  employees: employeesReducer,
  employee: singleEmployeeReducer,
  departments: departmentsReducer,
  department: singleDepartmentReducer,
  networkError: netWorkErrorReducer,
  loading,
});
