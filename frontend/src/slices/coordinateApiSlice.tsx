import { apiSlice } from './apiSlice'
import { BASE_URL } from './apiSlice'

export const coordinateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: () => ({
        url: BASE_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Coordinate'],
    }),
    setCoordinates: builder.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetCoordinatesQuery, useSetCoordinatesMutation } =
  coordinateApiSlice
