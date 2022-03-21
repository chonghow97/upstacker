import axios from 'axios';

export const fetchRepo = async ({signal}) => {
  const {data} = await axios.get('https://api.github.com/users/reactjs/repos', {
    signal,
  });

  return data;
};
