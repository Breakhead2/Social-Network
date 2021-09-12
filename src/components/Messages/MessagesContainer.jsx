import { actionCreator } from "../../redux/store-redux";
import { Messages } from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    chatInfo: state.messagePage.chatInfo,
    messages: state.messagePage.messages,
    newMessage: state.messagePage.newMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      let action = actionCreator("ADD-MESSAGE", null, null);
      dispatch(action);
    },
    updateMessages: (text) => {
      let action = actionCreator("UPDATE-MESSAGE", null, text);
      dispatch(action);
    },
  };
};

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
