import React from 'react';
import { render } from 'react-dom'
// import Client from './Client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './App.css';

import personsReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(personsReducer,
              applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);              
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<Client />, document.getElementById('root'));
