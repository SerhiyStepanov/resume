import s from "./teamProject.module.css";

export default function Projects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.projects}>Team project</h3>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.thumb}>
            <h4>Barbershop’s website</h4>
            <p>
              In this project, I was responsible for developing front-end part
              of corporate website as team member in extremely short terms.
            </p>
            <p>
              Technologies:
              <span className={s.span}>
                <span className={s.tachName}> HTML5, CSS3.</span>
              </span>
            </p>
            <a
              className={s.link}
              target="blank"
              href="https://kateryna-urbanovych.github.io/BarberShop-group-5/"
            >
              <i>Live demo</i>
            </a>
            <span> | </span>
            <a
              className={s.link}
              target="blank"
              href="https://github.com/Kateryna-Urbanovych/BarberShop-group-5"
            >
              <i>Source code</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
