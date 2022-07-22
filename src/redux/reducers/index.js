import { combineReducers } from "redux";

import { employeesReducer, singleEmployeeReducer } from "./employees";
import {
  departmentsReducer,
  singleDepartmentReducer,
} from "./departments";
import { loading } from "./loader";
import { netWorkErrorReducer } from "./errors";
import { leavesReducer } from "./leave-applications";

export default combineReducers({
  employees: employeesReducer,
  employee: singleEmployeeReducer,
  departments: departmentsReducer,
  department: singleDepartmentReducer,
  networkError: netWorkErrorReducer,
  leave_applications: leavesReducer,
  loading,
});
