import projects from "./projects.json";
import s from "./myProjects.module.css";

export default function MyProjects({ children }) {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>My projects</h3>
      <ul className={s.list}>
        {projects.map((el, index) => (
          <li key={index} className={s.listItem}>
            <div className={s.thumb}>
              <h4>{el.title} </h4>
              <p>{el.descriptions}</p>
              <p>
                Technologies:
                <span className={s.span}>
                  <span className={s.technologies}>
                    {el.technologies.map((el) => el).join(", ")}.
                  </span>
                </span>
              </p>
              <a className={s.link} target="_blank" href={el.demo}>
                <i>Live demo</i>
              </a>
              <span> | </span>
              <a className={s.link} target="_blank" href={el.code}>
                <i>Source code</i>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
