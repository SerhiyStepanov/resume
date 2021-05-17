import s from "./softSkills.module.css";

const skills = ["Scrum", "Teamwork", "GTD", "Agile"];
const sortSkills = skills.sort();

export default function SoftSkills({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Soft skills</h3>
      <ul className={s.list}>
        {sortSkills.map((el) => (
          <li key={el} className={s.listItem}>
            <p className={s.text}>{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
