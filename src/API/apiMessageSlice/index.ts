import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiMessageSlice = createApi({
  reducerPath: "addresse",
  baseQuery: fetchBaseQuery({ baseUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/" }),
});
