const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export const messageReducer = (action, state) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newObj = {
        id: state.messages.length + 1,
        text: action.message,
      };
      state.messages.push(newObj);
      state.newMessage = "";
      break;
    case UPDATE_MESSAGE:
      state.newMessage = action.message;
      break;
    default:
      return state;
  }
  return state;
};
