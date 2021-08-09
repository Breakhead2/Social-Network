import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={style.item}>
      <img alt="avatar" src="images/cookie.jpg" />
      <p className={style.message}>{props.message}</p>
    </div>
  );
};
