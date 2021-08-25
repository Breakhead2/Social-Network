import style from "./ChatItem.module.css";

export const ChatItem = (props) => {
  return (
    <div className={style.messages}>
      <p className={style.message}>{props.message}</p>
    </div>
  );
};
