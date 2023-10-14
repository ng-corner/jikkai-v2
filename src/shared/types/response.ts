import { Anime, Pagination } from "."

export interface AnimeWithPagination {
  data: Anime[]
  pagination: Pagination
}