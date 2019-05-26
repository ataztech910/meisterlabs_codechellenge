import {  put, takeLatest, all  } from 'redux-saga/effects';

function* changeUser(action) {
    try {
        yield put({ type: "SAVE_ADD_USER", person: action });
    }catch(error){
        console.log(error);
    }
}

function* watchPersonsAdd() {
    yield takeLatest('ADD_PERSON', changeUser);
}

function* watchPersonsUpdate(){
    yield takeLatest('SAVE_PERSON', changeUser);
}

export default function* rootSaga() {
    yield all([
        watchPersonsAdd(),
        watchPersonsUpdate()
    ])
}



