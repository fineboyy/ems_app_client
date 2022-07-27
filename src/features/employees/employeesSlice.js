import { createSlice } from '@reduxjs/toolkit'


const employeesSlice = createSlice({
    name: 'employees',
    initialState: [],

    reducers: {
        setEmployees: (state, {payload}) => {
            state.employees = payload        
        }
    }
})

export const { setEmployees } = employeesSlice.actions
export const selectAllEmployees = ({employees}) => employees
export default employeesSlice.reducer