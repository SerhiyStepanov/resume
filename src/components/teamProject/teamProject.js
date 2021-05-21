import teamProjects from "./teamProjects.json";
import s from "./teamProject.module.css";

export default function Projects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Team projects</h3>
      <ul className={s.list}>
        {teamProjects.map((el, index) => (
          <li key={index} className={s.listItem}>
            <div className={s.thumb}>
              <h4>{el.title}</h4>
              <p>{el.description}</p>
              <p>
                Technologies:
                <span className={s.span}>
                  <span className={s.tachName}>
                    {el.technologies.map((el) => el).join(", ")}.
                  </span>
                </span>
              </p>
              <a
                href={el.demo}
                target="_blank"
                rel="nofollow"
                className={s.link}
              >
                <i>Live demo</i>
              </a>
              <span> | </span>
              <a
                href={el.code}
                target="_blank"
                rel="nofollow"
                className={s.link}
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
