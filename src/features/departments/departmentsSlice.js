import { createSlice } from '@reduxjs/toolkit'


const departmentsSlice = createSlice({
    name: 'departments',
    initialState: [],
})


export const selectAllDepartments = ({departments}) => departments