import s from "./softSkills.module.css";

export default function SoftSkills({ children }) {
  return (
    <div className={s.box}>
      <h4 className={s.title}>Soft skills</h4>
      <ul className={s.list}>
        <li className={s.listItem}>
          <p className={s.text}>Scrum</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>Agile</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>GTD</p>
        </li>
        <li className={s.listItem}>
          <p className={s.text}>Teamwork</p>
        </li>
      </ul>
    </div>
  );
}
