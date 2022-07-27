import { apiSlice } from "../../app/api/apiSlice";

export const employeesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllEmployees: builder.query({
            query: () => ({
                query: () => "/employees"
            })
        }),
    })
})

export const {
    useGetAllEmployeesQuery
} = employeesApiSlice