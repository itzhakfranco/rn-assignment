import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './formTypes';

export const incrementCounter = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER,
  });
};
