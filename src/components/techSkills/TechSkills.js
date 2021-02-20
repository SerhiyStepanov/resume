import s from "./techSkills.module.css";

export default function TechSkills() {
  return (
    <div className={s.box}>
      <h4 className={s.title}>Tech skills</h4>
      <ul className={s.list}>
        <li className={s.listItem}>
          <p className={s.text}>HTML5</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>CSS3</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>JavaScript</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>GIT WebPack</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>React.js</p>
        </li>
      </ul>
    </div>
  );
}
