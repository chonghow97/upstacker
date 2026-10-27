import type {RepoSearchResult} from 'apis';

export const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

export const getUser = () => ({type: GET_USER}) as const;
export const setUser = (user: RepoSearchResult) =>
  ({type: SET_USER, user}) as const;

type UserAction = ReturnType<typeof getUser> | ReturnType<typeof setUser>;

export interface UserState {
  user: RepoSearchResult | undefined;
}

const initialState: UserState = {
  user: undefined,
};

export default (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case SET_USER: {
      const {user} = action;
      return {...state, user};
    }

    default:
      return state;
  }
};
