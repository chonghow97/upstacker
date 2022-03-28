import {api} from 'apis';

export const requestGetUser = async () =>
  api.get('/search/repositories?q=user:reactjs');
