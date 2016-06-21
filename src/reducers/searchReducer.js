
import * as types from '../constants/actionTypes.js';

const initialState = {
  selectedTab: "add"
};

export default function searchReducer(state = initialState, action = {}) {
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
