const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const SET_QUERY = 'setQuery';

export const increment = () => ({type: INCREMENT}) as const;
export const decrement = () => ({type: DECREMENT}) as const;
export const setQuery = (query: string) => ({type: SET_QUERY, query}) as const;

type CommonAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof setQuery>;

export interface CommonState {
  count: number;
  query: string;
}

const initialState: CommonState = {
  count: 0,
  query: '',
};

export default (
  state: CommonState = initialState,
  action: CommonAction,
): CommonState => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case SET_QUERY: {
      const {query} = action;
      return {...state, query};
    }

    default:
      return state;
  }
};
