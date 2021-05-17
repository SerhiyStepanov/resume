import Summary from "../summary";
import Projects from "../teamProject";
import MyProjects from "../myProjects";
import s from "./main.module.css";

export default function Main({ children }) {
  return (
    <div className={s.container}>
      <div className={s.thumb}>
        <h1 className={s.name}>Serhiy Stepanov</h1>
      </div>

      <h2 className={s.title}>Front-End Developer</h2>

      <Summary />

      <MyProjects />

      <Projects />

      <div className={s.box}>
        <h3 className={s.education}>Education</h3>
        <p className={s.text}>
          Vocational school № 59, September 1994 - May1995 accountant.
        </p>

        <p className={s.text}>
          IT school <span className={s.goit}>"GoIT"</span> from April 2020 to
          March 2021.
        </p>
      </div>

      <div className={s.box}>
        <h4>Previous work experience</h4>
        <p className={s.text}>Finance management.</p>
      </div>
      <i className={s.text}>
        <span> * </span>My hobbies are photography and cooking.
      </i>
    </div>
  );
}
