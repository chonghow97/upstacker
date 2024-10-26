import axios from 'axios';
import {TOKEN} from '@env';

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers = {
  'user-Agent': 'request',
  Authorization: `token ${TOKEN}`,
};

export const api = axios;

export const fetchRepo = async ({signal, queryKey, pageParam = 0}) => {
  const [_key, {per_page, query}] = queryKey;
  const {data} = await api.get(`/search/repositories?q=${query}+user:reactjs`, {
    params: {per_page, page: pageParam, sort: 'stars', direction: 'desc'},
    signal,
  });

  return data;
};

export const getRepoDetail = async ({signal, queryKey}) => {
  const [_key, {id}] = queryKey;

  const {data} = await api.get(`repos/reactjs/${id}`, {
    signal,
  });

  return data;
};
