import { ADD_MESSAGE } from "../constants/messageTypes";

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: {
      message: message
    }
  };
}

export function removeMessage() {
  return {
    type: ADD_MESSAGE,
    payload: {
      message: null
    }
  };
}
