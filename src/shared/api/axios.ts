import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { AnimeWithPagination } from "../types";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const getAnimeByPath = async (path: string, { params, headers }: Pick<AxiosRequestConfig, 'params' | 'headers'>): Promise<AnimeWithPagination> => {
  const response = await apiInstance.get(path, { params, headers })
  if (response instanceof AxiosError) {
    // FIX to axios interceptor
  }

  return response.data
};

export { getAnimeByPath };
