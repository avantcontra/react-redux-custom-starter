/**
 * Created by contrapro on 2/24/16.
 */
import {
  COUNTER_INCREMENT
} from './ActionTypes';

export function increment() {
  return {
    type: COUNTER_INCREMENT
  };
}
