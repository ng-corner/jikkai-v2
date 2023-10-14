export interface Anime {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_japanese: string
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: Broadcast
  studios: Studio[]
  genres: Genre[]
}

export interface Title {
  type: string
  title: string
}

export interface Aired {
  from: string
  to: string
  prop: Prop
}


export interface From {
  day: number
  month: number
  year: number
}

export interface To {
  day: number
  month: number
  year: number
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Studio {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: PaginationItems
}

export interface PaginationItems {
  count: number
  total: number
  per_page: number
}

interface Images {
  jpg: Jpg
  webp: Webp
}

interface Jpg {
  image_url: string
  small_image_url: string
  large_image_url: string
}

interface Webp {
  image_url: string
  small_image_url: string
  large_image_url: string
}

interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
}

interface Prop {
  from: From
  to: To
  string: string
}