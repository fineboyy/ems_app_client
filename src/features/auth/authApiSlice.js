import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signOut: builder.mutation({
            query: credentials => ({
                url: '/logout',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        refresh: builder.mutation({
            query: credentials => ({
                url: '/refresh',
                method: 'GET',
            })
        }),
    })
})

export const {
    useLoginMutation,
    useSignOutMutation,
    useRefreshMutation
} = authApiSlice