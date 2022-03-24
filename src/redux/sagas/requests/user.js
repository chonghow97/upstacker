import {api} from 'apis';

export const requestGetUser = async () => {
  return await api.get('/search/repositories?q=user:reactjs');
};
