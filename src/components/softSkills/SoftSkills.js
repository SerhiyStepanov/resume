import { FaHandshake } from "react-icons/fa";
import s from "./softSkills.module.css";

export default function SoftSkills({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Soft skills</h3>
      <div className={s.thumb}>
        <FaHandshake className={s.icon} />
        <p className={s.text}>Teamwork</p>
      </div>
    </div>
  );
}
