import s from "./projects.module.css";

export default function Projects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.projects}>Team projects</h3>
      <ol>
        <li class={s.listItem}>
          <div className={s.thumb}>
            <a
              class={s.link}
              target="blank"
              href="https://kateryna-urbanovych.github.io/BarberShop-group-5/"
            >
              https://kateryna-urbanovych.github.io/BarberShop-group-5/
            </a>
            <b className={s.dash}> - </b>
            <span className={s.span}>
              <b>[</b>
              <span class={s.tachName}> HTML5, CSS3 </span>
              <b>]</b>
            </span>
          </div>
        </li>
        <li class={s.listItem}>
          <div className={s.thumb}>
            <a
              class={s.link}
              target="blank"
              href="https://luminousnow.github.io/group-6.filmoteka/"
            >
              https://luminousnow.github.io/group-6.filmoteka/
            </a>
            <b className={s.dash}> - </b>
            <span className={s.span}>
              <b>[</b>
              <span class={s.tachName}> JavaScript</span>
              <b>]</b>
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
}
