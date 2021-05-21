import projects from "./projects.json";
import s from "./myProjects.module.css";

export default function MyProjects({ children }) {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Projects</h3>
      <ul className={s.list}>
        {projects.map((el, index) => (
          <li key={index} className={s.listItem}>
            <div className={s.thumb}>
              <h4>{el.title} </h4>
              <p>{el.description}</p>
              <p>
                Technologies:
                <span className={s.span}>
                  <span className={s.technologie}>
                    {el.technologies.map((el) => el).join(", ")}.
                  </span>
                </span>
              </p>
              <a
                href={el.demo}
                className={s.link}
                target="_blank"
                rel="nofollow"
              >
                <i>Live demo</i>
              </a>
              <span> | </span>
              <a
                href={el.code}
                className={s.link}
                target="_blank"
                rel="nofollow"
              >
                <i>Source code</i>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
