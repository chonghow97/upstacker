import axios from 'axios';
import type {QueryFunctionContext} from '@tanstack/react-query';
import {TOKEN} from '@env';

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers.common['user-Agent'] = 'request';
axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
console.log(TOKEN);

export const api = axios;

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string | null;
}

export interface RepoSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}

export type FetchRepoKey = readonly [
  'fetch-repo',
  {per_page: number; query: string},
];
export type RepoDetailKey = readonly ['getRepoDetail', {id: string}];

export const fetchRepo = async ({
  signal,
  queryKey,
  pageParam,
}: QueryFunctionContext<FetchRepoKey, number>): Promise<RepoSearchResult> => {
  const [_key, {per_page, query}] = queryKey;
  const {data} = await api.get<RepoSearchResult>(
    `/search/repositories?q=${query}+user:reactjs`,
    {
      params: {per_page, page: pageParam, sort: 'stars', direction: 'desc'},
      signal,
    },
  );

  return data;
};

export const getRepoDetail = async ({
  signal,
  queryKey,
}: QueryFunctionContext<RepoDetailKey>): Promise<Repo> => {
  const [_key, {id}] = queryKey;

  const {data} = await api.get<Repo>(`repos/reactjs/${id}`, {
    signal,
  });

  return data;
};
