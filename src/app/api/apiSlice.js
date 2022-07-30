import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";


let URL
if(process.env.NODE_ENV === "production") {
  URL = "https://mighty-peak-10043.herokuapp.com"
} else {
  URL = "http://localhost:5000"
}


const baseQuery = fetchBaseQuery({
  baseUrl: URL,
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
      getOneDepartment: builder.query({
        query: (id) => `/departments/${id}`
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
      deleteEmployee: builder.mutation({
        query: ({id, department_id }) => ({
          url: `/employees/${id}`,
          method: 'DELETE',
          body: { department_id: department_id }
        })
      }),
     })
})


export const { 
  useGetAllEmployeesQuery, 
  useGetAllDepartmentsQuery, 
  useGetOneEmployeeQuery, 
  useGetOneDepartmentQuery,
  useGetAllLeaveApplicationsQuery,
  useCreateNewEmployeeMutation,
  useDeleteEmployeeMutation
 } = apiSlice