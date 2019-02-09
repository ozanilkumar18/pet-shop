import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING } from "../actions";

const LoginReducer = (state = { isLogin: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, isLogin: true };
      break;
    case LOGIN_FAIL:
      return { ...state, login: action.payload, isLogin: false };
      break;
    case LOADING:
      return { ...state, isLoading: !state.isLoading };
      break;
    default:
      return state;
  }
};

export default LoginReducer;
