import {
  WIDGETS_EDIT_START,
  WIDGETS_EDIT_STOP,
  WIDGETS_LOAD,
  WIDGETS_LOAD_FAIL,
  WIDGETS_LOAD_SUCCESS,
  WIDGETS_SAVE,
  WIDGETS_SAVE_FAIL,
  WIDGETS_SAVE_SUCCESS
} from './../actions/ActionTypes';

const initialState = {
  loaded: false,
  editing: {},
  saveError: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case WIDGETS_LOAD:
      return {
        ...state,
        loading: true
      };
    case WIDGETS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case WIDGETS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    case WIDGETS_EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: true
        }
      };
    case WIDGETS_EDIT_STOP:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: false
        }
      };
    case WIDGETS_SAVE:
      return state; // 'saving' flag handled by redux-form
    case WIDGETS_SAVE_SUCCESS:
      const data = [...state.data];
      data[action.result.id - 1] = action.result;
      return {
        ...state,
        data: data,
        editing: {
          ...state.editing,
          [action.id]: false
        },
        saveError: {
          ...state.saveError,
          [action.id]: null
        }
      };
    case WIDGETS_SAVE_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: {
          ...state.saveError,
          [action.id]: action.error
        }
      } : state;
    default:
      return state;
  }
}
