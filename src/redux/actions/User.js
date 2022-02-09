import {
  SET_USERS,
  FETCH_USERS,
  FETCHING_USERS,
  GET_USER,
  ADD_USER,
  LOAD__USER,
  LOAD_USERS,
} from "../constants/UserConstant";

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  };
};
export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};
export const fetchingUsers = () => {
  return {
    type: FETCHING_USERS,
  };
};

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};
export const addingUser = (id) => {
  return {
    type: ADD_USER,
    id,
  };
};
export const loadingUsers = () => {
  return {
    type: LOAD_USERS,
  };
};

export const loadUser = () => {
  return {
    type: LOAD__USER,
  };
};
