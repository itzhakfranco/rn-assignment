import {INCREMENT_COUNTER} from './formTypes';

const formReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export default formReducer;
