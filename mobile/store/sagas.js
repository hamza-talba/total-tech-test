import { usersListRequest,userByIdRequest } from "../api";
import { put, takeLatest, all } from "@redux-saga/core/effects";

function* usersListApiCall({ payload }) {
    try {
        const res = yield (usersListRequest(payload))
         if (res.data.length > 0) {
            yield put({
                type: 'LIST_API_SUCCESS',
                usersList: res.data
            })
        } else {
            yield put({ type: 'API_LIST_END' })
        }
    } catch (err) {
        yield put({
            type: 'API_FAILURE',
            error: err.message
        })
    }
}
 
function* userByIdApiCall({ payload }) {
    try {
        const res = yield (userByIdRequest(payload))
            yield put({
            type: 'USER_API_SUCCESS',
            user: res
        })
    } catch (err) {
        yield put({
            type: 'API_FAILURE',
            error: err.message
        })
    }
}

function* userByIdSaga() {
    yield takeLatest('USER_API_REQUEST', userByIdApiCall);
} 

function* usersListSaga() {
    yield takeLatest('LIST_API_REQUEST', usersListApiCall);
}

export default function* rootSaga() {
    yield all([
        usersListSaga(),
        userByIdSaga()
    ])
}