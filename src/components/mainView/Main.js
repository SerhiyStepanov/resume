import Projects from "../teamProject";
import MyProjects from "../myProjects";
import s from "./main.module.css";

export default function Main({ children }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Front-End Developer</h3>

      <h2 className={s.name}>Serhiy Stepanov</h2>

      <MyProjects />

      <Projects />

      <div className={s.box}>
        <h3 className={s.education}>Education</h3>
        <p className={s.text}>
          Vocational school № 59, September 1994 - May1995 – accountant.
        </p>

        <p className={s.text}>
          IT school <span className={s.goit}>GoIT</span> from april 2020 to
          march 2021.
        </p>
      </div>

      <p className={s.text}>Previous work experience: finance management.</p>

      <p className={s.text}>My hobbies are photography and cooking.</p>
    </div>
  );
}
