export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
}

export interface NavTab {
  id: string;
  name: string;
  value: string;
}