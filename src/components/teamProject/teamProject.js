import s from "./teamProject.module.css";

export default function Projects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.projects}>Team projects</h3>
      <ul className={s.list}>
        <li class={s.listItem}>
          <div className={s.thumb}>
            <h4>Barbershop’s website</h4>
            <p>
              In this project, I was responsible for developing front-end part
              of corporate website as team member in extremely short terms.
            </p>
            <p>
              Technologies:
              <span className={s.span}>
                <span class={s.tachName}> HTML5, CSS3.</span>
              </span>
            </p>
            <a
              class={s.link}
              target="blank"
              href="https://kateryna-urbanovych.github.io/BarberShop-group-5/"
            >
              Live demo
            </a>
            <span> | </span>
            <a
              class={s.link}
              target="blank"
              href="https://github.com/Kateryna-Urbanovych/BarberShop-group-5"
            >
              Source code
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
