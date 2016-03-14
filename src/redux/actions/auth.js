/**
 * Created by contrapro on 2/24/16.
 */
import {
  AUTH_LOAD,
  AUTH_LOAD_FAIL,
  AUTH_LOAD_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_FAIL,
  AUTH_LOGOUT_SUCCESS
} from './ActionTypes';

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [AUTH_LOAD, AUTH_LOAD_SUCCESS, AUTH_LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
