import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={style.item}>
      <div className={style.left}>
        <img alt="avatar" src="images/cookie.jpg" />
        <p className={style.message}>{props.message}</p>
      </div>
      <span className={style.like}>
        <span className={style.likesCount}>{props.likesCount}</span> Like
      </span>
    </div>
  );
};
