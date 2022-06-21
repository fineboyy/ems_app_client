import { combineReducers } from "redux";

import employees from './employees'
import departments from './departments'

export default combineReducers({ employees, departments })