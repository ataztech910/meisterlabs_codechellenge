import {  call, put, takeLatest, all  } from 'redux-saga/effects';
import Server from '../Server';

function* addUser(action) {
    try {
        console.log('action is ', action);
        const ServerCall = yield call([ Server, Server['post']], action.person);
        if (ServerCall) {
            console.log('ServerCall is ', ServerCall);
            yield put({ type: "SAVE_ADD_USER", person: ServerCall });
        }
    }catch(error){
        console.log(error);
    }
}

function* updateUser(action) {
    try {
        const ServerCall = yield call([Server, Server['patch']], action.person);
        if (ServerCall) { 
            console.log('ServerCall update is ', ServerCall);
            yield put({ type: "SAVE_UPDATE_USER", person: ServerCall }); 
        }
    } catch (error) {
        console.log(error);
    }
}

function* watchPersonsAdd() {
    yield takeLatest('ADD_PERSON', addUser);
}

function* watchPersonsUpdate(){
    yield takeLatest('SAVE_PERSON', updateUser);
}

export default function* rootSaga() {
    yield all([
        watchPersonsAdd(),
        watchPersonsUpdate()
    ])
}



