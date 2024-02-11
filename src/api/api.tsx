// import {CreateApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {postType} from './interface';

export const postsAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getUsers: builder.query<postType, string>({
      query: endpoint => `${endpoint}`,
      providesTags: ['Post'],
    }),

    newUser: builder.mutation({
      query: user => ({url: 'users', method: 'POST', body: user}),
      invalidatesTags: ['Post'],
    }),

    deleteUser: builder.mutation({
      query: ({id}) => ({url: `users/${id}`, method: 'DELETE', body: id}),
      invalidatesTags: ['Post'],
    }),

    updateUser: builder.mutation({
      query: user => ({url: `users/${user.id}`, method: 'PATCH', body: user}),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useNewUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = postsAPI;

// ===== USAGE ====

// In file : where api will be used
// import these
//
// import {useGetUsersQuery, useNewUserMutation,useDeleteUserMutation,useUpdateeUserMutation} from '',
//
// const {data, isError} = useGetUsersQuery('endpointName');
// const [newUser] = useNewUserMutation(); // newUSer is a function
// const [deleteUser] = useDeleteUserMutation(); // newUSer is a function
// const [updateUser] = useUpdateUserMutation(); // newUSer is a function
