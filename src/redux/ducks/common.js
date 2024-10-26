const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const SET_QUERY = 'setQuery';

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const setQuery = query => ({type: SET_QUERY, query});

const initialState = {
  count: 0,
  query: '',
};

export default (state = initialState, action) => {
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
