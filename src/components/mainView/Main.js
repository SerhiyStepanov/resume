import Projects from "../projects";
import Homeworks from "../homeworks";
import s from "./main.module.css";

export default function Main({ children }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Front-End Developer</h3>

      <h2 className={s.name}>Serhiy Stepanov</h2>

      <div className={s.box}>
        <h3 className={s.education}>Education</h3>
        <p className={s.text}>
          IT school <span className={s.goit}>GoIT</span> from april 2020 to
          march 2021 .
        </p>
      </div>

      <Projects />

      <Homeworks />
    </div>
  );
}
