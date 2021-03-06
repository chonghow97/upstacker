import {takeLatest} from 'redux-saga/effects';
import {useHandleGetUser} from './handler/user';
import {GET_USER} from '../ducks/user';

export function* watcherSaga() {
  yield takeLatest(GET_USER, useHandleGetUser);
}
