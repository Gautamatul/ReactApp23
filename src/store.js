import  createSagaMiddleware  from 'redux-saga'
import { applyMiddleware, compose } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducer/rootReducer'
    const sagaMiddleWare = createSagaMiddleware()
    let enhancer;



    // if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    //     enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleWare, logger));
    // } else {
    //     enhancer = compose(applyMiddleware(sagaMiddleWare, logger))
    // }

    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleWare, logger],
    })
    sagaMiddleWare.run(rootSaga)
    export default store

// an individual action, saga, reducer but then its all added to rootReducer which is added to rootStore.