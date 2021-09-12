const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
  newMessage: "",
  chatInfo: [
    { id: 1, name: "Dmitriy" },
    { id: 2, name: "Nickolay" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Denis" },
    { id: 5, name: "Anna" },
  ],
  messages: [
    { id: 1, text: "Hi!" },
    { id: 2, text: "How are you?" },
  ],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newObj = {
        id: state.messages.length + 1,
        text: state.newMessage,
      };

      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];

      stateCopy.messages.push(newObj);
      stateCopy.newMessage = "";
      return stateCopy;
    }
    case UPDATE_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.newMessage = action.message;
      return stateCopy;
    }
    default:
      return state;
  }
};
