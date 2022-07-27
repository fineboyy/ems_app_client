import { createSlice } from '@reduxjs/toolkit'

const sidebarVisibilitySlice = createSlice({
    name: 'sidebarVisibility',
    initialState: {value: false},
    reducers: {
        setSidebarVisible: (state, {payload}) => {
            state.value = !state.value
        }
    }
})


export const { setSidebarVisible } = sidebarVisibilitySlice.actions
export default sidebarVisibilitySlice.reducer

export const selectSidebarVisibility = (state) => state.sidebarVisibility.value
