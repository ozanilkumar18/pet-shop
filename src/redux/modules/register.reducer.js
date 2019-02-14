import { REGISTER_SUCCESS, REGISTER_FAIL, LOADING } from "../actions";

const RegisterReducer = (state = { isRegister: false }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, isRegister: true };
      break;
    case REGISTER_FAIL:
      return { ...state, register: action.payload, isRegister: false };
      break;
    case LOADING:
      return { ...state, isLoading: !state.isLoading };
      break;
    default:
      return state;
  }
};

export default RegisterReducer;
