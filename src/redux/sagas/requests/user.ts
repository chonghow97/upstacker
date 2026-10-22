import {api} from 'apis';
import type {RepoSearchResult} from 'apis';

export const requestGetUser = async () =>
  api.get<RepoSearchResult>('/search/repositories?q=user:reactjs');
