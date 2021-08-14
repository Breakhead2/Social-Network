import { NavLink } from "react-router-dom";
import style from "./Messages.module.css";

const ChatRoom = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={style.item}>
      <NavLink activeClassName={style.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const ChatItem = (props) => {
  return (
    <div className={style.messages}>
      <p className={style.message}>{props.message}</p>
    </div>
  );
};

export const Messages = () => {
  let chatInfo = [
    { id: 1, name: "Dmitriy" },
    { id: 2, name: "Nickolay" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Denis" },
    { id: 5, name: "Annay" },
  ];

  let messages = [
    { id: 1, text: "Hi!" },
    { id: 2, text: "How are you?" },
  ];

  let ChatRoomElements = chatInfo.map((room) => (
    <ChatRoom name={room.name} id={room.id} />
  ));
  let ChatItemElements = messages.map((message) => (
    <ChatItem message={message.text} />
  ));

  return (
    <div className={style.box}>
      <div className={style.chatRooms}>{ChatRoomElements}</div>
      <div className={style.chat}>{ChatItemElements}</div>
    </div>
  );
};
