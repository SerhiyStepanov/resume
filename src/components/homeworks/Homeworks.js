import s from "./homeworks.module.css";

export default function Homeworks({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.homeworks}>My Homeworks</h3>
      <ul>
        <li className={s.listItem}>
          <div className={s.thumb}>
            <a
              class={s.link}
              target="blank"
              href="https://serhiystepanov.github.io/goit-markup-hw-08/"
            >
              https://serhiystepanov.github.io/goit-markup-hw-08/
            </a>
            <b className={s.dash}> - </b>
            <span className={s.span}>
              <b>[</b>
              <span class={s.tachName}> HTML5, CSS3 </span>
              <b>]</b>
            </span>
          </div>
        </li>
        <li className={s.listItem}>
          <div className={s.thumb}>
            <a
              class={s.link}
              target="blank"
              href="https://tas-goit-react-hw-04-movies.netlify.app/"
            >
              https://tas-goit-react-hw-04-movies.netlify.app/
            </a>
            <b className={s.dash}> - </b>
            <span className={s.span}>
              <b>[</b>
              <span class={s.tachName}>JavaScript, React.js </span>
              <b>]</b>
            </span>
          </div>
        </li>
        <li className={s.listItem}>
          <div className={s.thumb}>
            <a
              class={s.link}
              target="blank"
              href="https://tas-goit-react-hw-08-phonebook.netlify.app/"
            >
              https://tas-goit-react-hw-08-phonebook.netlify.app/
            </a>
            <b className={s.dash}> - </b>
            <span className={s.span}>
              <b>[</b>
              <span class={s.tachName}>JavaScript, React.js</span>
              <b>]</b>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
