import {call, put} from 'redux-saga/effects';
import {setUser} from '../../ducks/user';
import {requestGetUser} from '../requests/user';

export function* useHandleGetUser() {
  try {
    const response: Awaited<ReturnType<typeof requestGetUser>> =
      yield call(requestGetUser);
    const {data} = response;
    yield put(setUser(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
