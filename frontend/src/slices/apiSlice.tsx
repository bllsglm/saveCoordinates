import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? 'http://localhost:5000/api'
    : 'https://savecoordinates.onrender.com/'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Coordinate'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
})
