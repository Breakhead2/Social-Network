import { ChatItem } from "./ChatItem/ChatItem";
import { ChatRoom } from "./ChatRoom/ChatRoom";
import style from "./Messages.module.css";

export const Messages = (props) => {
  let ChatRoomElements = props.chatInfo.map((room) => (
    <ChatRoom name={room.name} id={room.id} />
  ));
  let ChatItemElements = props.messages.map((message) => (
    <ChatItem message={message.text} />
  ));

  return (
    <div className={style.box}>
      <div className={style.chatRooms}>{ChatRoomElements}</div>
      <div className={style.chat}>{ChatItemElements}</div>
    </div>
  );
};
