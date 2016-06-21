
import * as types from '../constants/ActionTypes.js';

// const initialState = {
//   selectedTab: "add"
// };

export default (state = {
  selectedTab: "add",
  count: 0
}, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        selectedTab: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        selectedTab: state.count - 1
      };
    default:
      return state;
  }
}
