import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./../reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../sagas"; // redux-saga libarary

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware(); // redux-saga

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware]; // redux-saga
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga); // redux-saga
  return store;
};

export default configureStore;
