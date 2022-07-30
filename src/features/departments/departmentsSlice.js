import { createSlice } from '@reduxjs/toolkit'


const departmentsSlice = createSlice({
    name: 'departments',
    initialState: [],
    reducers: {}
})


export const selectAllDepartments = ({departments}) => departments