import { ADD_MESSAGE } from "../constants/messageTypes";

const initialState = {
  message: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}
