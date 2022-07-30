import { createSlice } from '@reduxjs/toolkit'

const sidebarVisibilitySlice = createSlice({
    name: 'sidebarVisibility',
    initialState: false,
    reducers: {
        setSidebarVisible: (state, {payload}) => state = payload
    }
})


export const { setSidebarVisible } = sidebarVisibilitySlice.actions
export default sidebarVisibilitySlice.reducer

export const selectSidebarVisibility = (state) => state.sidebarVisibility
