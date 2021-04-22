import teamProjects from "./teamProjects.json";
import s from "./teamProject.module.css";

export default function Projects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.projects}>Team projects:</h3>
      <ul className={s.list}>
        {teamProjects.map((el, index) => (
          <li key={index} className={s.listItem}>
            <div className={s.thumb}>
              <h4>{el.title}</h4>
              <p>{el.descriptions}</p>
              <p>
                Technologies:
                <span className={s.span}>
                  <span className={s.tachName}>
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
