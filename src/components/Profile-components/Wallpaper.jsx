import style from "./Wallpaper.module.css";

export const Wallpaper = () => {
  return (
    <div className={style.wellpaper}>
      <img
        className={style.wellpaper_img}
        alt="wellpaper"
        src="images/wellpaper.png"
      />
    </div>
  );
};
