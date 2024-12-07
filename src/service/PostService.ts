import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWork } from '../components/models/IWork'


export const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://studylink.website/api'}),
    endpoints: (build) => ({
        fetchAllWorks: build.query<IWork[], number>({
            query: (limit=10) => ({
                url: '/works',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        fetchWorkByID: build.query<IWork, string>({
            query: (id) => ({
                url: `/works/${id}`,
            }),
            providesTags: result => ['Post']
        }),
        createWork: build.mutation({
            query: (formData: FormData) => ({
                url: '/works',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['Post']
        })
    })
})