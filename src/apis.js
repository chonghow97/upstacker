import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers = {
  'user-Agent': 'request',
};

export const fetchRepo = async ({signal, queryKey}) => {
  const [key, {per_page, pageParam}] = queryKey;
  const {data} = await axios.get('/search/repositories?q=user:reactjs', {
    params: {per_page, page: pageParam, sort: 'stars', direction: 'desc'},
    signal,
  });

  return data;
};

export const getRepoDetail = async ({signal, queryKey}) => {
  const [key, {id}] = queryKey;

  const {data} = await axios.get(`repos/reactjs/${id}`, {
    signal,
  });

  return data;
};
