import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';

export const fetchRepo = async ({signal, queryKey}) => {
  const [key, {per_page}] = queryKey;
  const {data} = await axios.get('users/reactjs/repos', {
    params: {per_page},
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
