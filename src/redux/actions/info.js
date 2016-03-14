import {
  INFO_LOAD,
  INFO_LOAD_FAIL,
  INFO_LOAD_SUCCESS
} from './ActionTypes';

export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

export function load() {
  return {
    types: [INFO_LOAD, INFO_LOAD_SUCCESS, INFO_LOAD_FAIL],
    promise: (client) => client.get('/loadInfo')
  };
}
