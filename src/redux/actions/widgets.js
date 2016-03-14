import {
  WIDGETS_EDIT_START,
  WIDGETS_EDIT_STOP,
  WIDGETS_LOAD,
  WIDGETS_LOAD_FAIL,
  WIDGETS_LOAD_SUCCESS,
  WIDGETS_SAVE,
  WIDGETS_SAVE_FAIL,
  WIDGETS_SAVE_SUCCESS
} from './ActionTypes';

export function isLoaded(globalState) {
  return globalState.widgets && globalState.widgets.loaded;
}

export function load() {
  return {
    types: [WIDGETS_LOAD, WIDGETS_LOAD_SUCCESS, WIDGETS_LOAD_FAIL],
    promise: (client) => client.get('/widget/load/param1/param2') // params not used, just shown as demonstration
  };
}

export function save(widget) {
  return {
    types: [WIDGETS_SAVE, WIDGETS_SAVE_SUCCESS, WIDGETS_SAVE_FAIL],
    id: widget.id,
    promise: (client) => client.post('/widget/update', {
      data: widget
    })
  };
}

export function editStart(id) {
  return {type: WIDGETS_EDIT_START, id};
}

export function editStop(id) {
  return {type: WIDGETS_EDIT_STOP, id};
}
