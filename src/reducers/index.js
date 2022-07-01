import { combineReducers } from "redux";

import employees from './employees'
import departments from './departments'
import loading from './loader'

export default combineReducers({ employees, departments, loading })