import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer as reduxFormReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import LoginReducer from "./modules/login.reducer";
import loginRequest from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  form: reduxFormReducer,
  loginReducer: LoginReducer
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(loginRequest);

export default store;
