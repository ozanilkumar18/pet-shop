import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer as reduxFormReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import LoginReducer from "./modules/login.reducer";
import RegisterReducer from "./modules/register.reducer";
import rootSaga from "./index";
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  form: reduxFormReducer,
  loginReducer: LoginReducer,
  registerReducer: RegisterReducer
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
