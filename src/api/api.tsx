// import {CreateApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {postType} from './interface';

export const postsAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65c88dbfa4fbc162e111db80.mockapi.io/testing/',
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query<postType[], string>({
      query: endpoint => `${endpoint}`,
      providesTags: ['Post'],
    }),

    newPost: builder.mutation({
      query: user => ({url: 'posts', method: 'POST', body: user}),
      invalidatesTags: ['Post'],
    }),

    deletePost: builder.mutation({
      query: ({id}: {id: string}) => ({
        url: `posts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Post'],
    }),

    updatePost: builder.mutation({
      query: post => ({url: `posts/${post.id}`, method: 'PATCH', body: post}),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useNewPostMutation,
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
