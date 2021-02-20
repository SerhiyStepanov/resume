import photo from "../image/photo.jpg";
import s from "./photo.module.css";

export default function Photo() {
  return (
    <div className={s.box}>
      <img src={photo} alt="Serhiy" className={s.photo} />
    </div>
  );
}
