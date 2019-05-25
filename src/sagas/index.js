import { put, takeEvery   } from 'redux-saga/effects';

function* changeUser(action) {
    try {
        yield put({ type: "SAVE_ADD_USER", person: action.person });
    }catch(error){
        console.log(error);
    }
}

function* watchPersons() {
    yield takeEvery('ADD_PERSON', changeUser);
}

export default watchPersons;


