import style from "./SideBarItem.module.css";

export const SideBarItem = (props) => {
  let src = "images/ava" + props.id + ".jpg";
  return (
    <div className={style.itemBox}>
      <img src={src} alt="avatar" />
      <div className={style.name}>{props.name}</div>
    </div>
  );
};
