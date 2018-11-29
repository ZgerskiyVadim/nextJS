import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const initializeStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default initializeStore;