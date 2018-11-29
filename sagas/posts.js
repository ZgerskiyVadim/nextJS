import {call, put, takeEvery, all} from 'redux-saga/effects';
import * as postsAPI from '../services/api/postsAPI';
import {
    GET_GROUPS_SUCCESS,
    GET_GROUPS_PENDING,
    GET_GROUPS_FAIL
} from '../actions';

function* getPosts(action) {
    try {
        const groups = yield call(postsAPI.getPosts, action.payload);
        yield put({type: GET_GROUPS_SUCCESS, payload: groups.data});
    } catch (error) {
        yield put({type: GET_GROUPS_FAIL, payload: error});
    }
}

export default function* groupsSaga() {
    yield all([
        takeEvery(GET_GROUPS_PENDING, getPosts)
    ]);
}