import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'http://localhost:5000/api'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Coordinate'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
})
