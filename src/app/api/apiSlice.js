import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("Sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log("RefreshResult", refreshResult);

    if (refreshResult?.data) {
      const username = api.getState().auth.username;
      api.dispatch(setCredentials({ ...refreshResult.data, username }));

      //retry Original Query with new accessToken
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};


export const apiSlice = createApi({
    baseQuery:  baseQueryWithReauth,
    keepUnusedDataFor: 10 * 60,
    endpoints: builder => ({
      getAllEmployees: builder.query({
        query: () => `/employees`,
      }),
      getOneEmployee: builder.query({
        query: (id) => `/employees/${id}`,
      }),
      getAllDepartments: builder.query({
        query: () => `/departments`
      }),
      getAllLeaveApplications: builder.query({
        query: () => `/leave-applications`
      }),
      createNewEmployee: builder.mutation({
        query: (employeeData) => ({
          url: `/employees`,
          method: 'POST',
          body: { ...employeeData }
        })

      }),
     })
})


export const { 
  useGetAllEmployeesQuery, 
  useGetAllDepartmentsQuery, 
  useGetOneEmployeeQuery, 
  useGetAllLeaveApplicationsQuery,
  useCreateNewEmployeeMutation
 } = apiSlice