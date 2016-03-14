import {
  COUNTER_INCREMENT
} from '../actions/ActionTypes';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      const {count} = state;
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

