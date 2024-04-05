import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Song {
  track_id: string;
  title: string;
}

interface Artist {
  artist_id: string;
  name: string;
}

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "5a00ce8cb8msh176094d26029fccp1b17aajsn8f977dedc2c2"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({
      query: () => "charts/list",
    }),
    getSongsBySearch: builder.query<Song[], string>({
      query: (searchTerm) => `search?term=${searchTerm}`,
    }),
    getArtistDetails: builder.query<Artist, string>({
      query: (artistId) => `artists/get-details?id=${artistId}`,
    }),
    getSongDetails: builder.query<Song, { songid: string }>({
      query: ({ songid }) => `songs/v2/get-details?id=${songid}`,
    }),
    getSongRelated: builder.query<Song[], { songid: string }>({
      query: ({ songid }) => `songs/list-recommendations?id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
