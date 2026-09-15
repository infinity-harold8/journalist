import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

const initialState = usersAdapter.getInitialState();

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users/get",
      transformResponse: (response) => {
        // Can Sanitize the returned values
        return usersAdapter.setAll(initialState, response);
      },
      providesTags: (result) =>
        result
          ? [
              ...result.ids.map((id) => ({ type: "User", id })),
              {
                type: "Users",
                id: "LIST",
              },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: "/users/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/users/update/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        {
          type: "Users",
          id,
        },
        {
          type: "Users",
          id: "LIST",
        },
      ],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        {
          type: "Users",
          id,
        },
        {
          type: "Users",
          id: "LIST",
        },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

const selectUsersResults = userApi.endpoints.getUsers.select();

export const selectUsersData = createSelector(
  selectUsersResults,
  (result) => result.data ?? initialState,
);

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state) => selectUsersData(state));
