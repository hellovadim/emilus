import {
  SET_USERS,
  GET_USER,
  LOAD__USER,
  LOAD_USERS,
} from "redux/constants/UserConstant";

const initialState = {
  loading: true,
  users: [],
  error: false,
  user: {},
  loadingSomeUser: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        loadingSomeUser: false,
      };
    }
    case LOAD__USER: {
      return {
        ...state,
        loadingSomeUser: true,
        user: {},
      };
    }
    default:
      return state;
  }
}
