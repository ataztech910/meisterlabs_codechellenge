import React from 'react';
import { render } from 'react-dom'
// import Client from './Client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import './App.css';

import personsReducer from './reducers';
import watchPersons from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(personsReducer,
              applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchPersons);              
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<Client />, document.getElementById('root'));
