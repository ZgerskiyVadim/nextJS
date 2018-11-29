import {fork, all} from 'redux-saga/effects';
import postsSaga from './posts';

export default function* rootSaga() {
    yield all([
        fork(postsSaga)
    ]);
}