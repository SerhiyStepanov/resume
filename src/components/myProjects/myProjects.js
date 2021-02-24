import s from "./myProjects.module.css";

export default function MyProjects({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.homeworks}>My projects</h3>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.thumb}>
            <h4>Web Studio website</h4>
            <p>
              In this project, I was responsible for developing fully-responsive
              front-end part of corporate website.
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
              href="https://serhiystepanov.github.io/goit-markup-hw-08/"
            >
              Live demo
            </a>
            <span> | </span>
            <a
              class={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-markup-hw-08"
            >
              Source code
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.thumb}>
            <h4>Movies website</h4>
            <p>
              The main goal of the project was to developing website with a
              search for movies.
            </p>
            <p>
              Technologies:
              <span className={s.span}>
                <span class={s.tachName}>
                  {" "}
                  JavaScript, React.js, HTML5, CSS3.
                </span>
              </span>
            </p>
            <a
              class={s.link}
              target="blank"
              href="https://tas-goit-react-hw-04-movies.netlify.app/"
            >
              Live demo
            </a>
            <span> | </span>
            <a
              class={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-react-hw-04-movies"
            >
              Source code
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.thumb}>
            <h4>Phone book </h4>
            <p> Web application phone book with registration and logging in.</p>
            <p>
              Technologies:
              <span className={s.span}>
                <span class={s.tachName}>
                  {" "}
                  React.js, JavaScript, Redux, Axios, HTML5, CSS3.
                </span>
              </span>
            </p>
            <a
              class={s.link}
              target="blank"
              href="https://tas-goit-react-hw-08-phonebook.netlify.app/"
            >
              Live demo
            </a>
            <span> | </span>
            <a
              class={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-react-hw-08-phonebook"
            >
              Source code
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
