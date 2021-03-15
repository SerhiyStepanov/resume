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
                <span className={s.tachName}> HTML5, CSS3.</span>
              </span>
            </p>
            <a
              className={s.link}
              target="blank"
              href="https://serhiystepanov.github.io/goit-markup-hw-08/"
            >
              <i>Live demo</i>
            </a>
            <span> | </span>
            <a
              className={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-markup-hw-08"
            >
              <i>Source code</i>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.thumb}>
            <h4>Movies website</h4>
            <p>
              The main goal of the project was to developing fully-responsive
              website with a search for the 20 best films to date.
            </p>
            <p>
              Technologies:
              <span className={s.span}>
                <span className={s.tachName}>
                  {" "}
                  JavaScript, React.js, HTML5, CSS3.
                </span>
              </span>
            </p>
            <a
              className={s.link}
              target="blank"
              href="https://tas-goit-react-hw-04-movies.netlify.app/"
            >
              <i>Live demo</i>
            </a>
            <span> | </span>
            <a
              className={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-react-hw-04-movies"
            >
              <i>Source code</i>
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
                <span className={s.tachName}>
                  {" "}
                  React.js, JavaScript, Redux, Axios, HTML5, CSS3.
                </span>
              </span>
            </p>
            <a
              className={s.link}
              target="blank"
              href="https://tas-goit-react-hw-08-phonebook.netlify.app/"
            >
              <i>Live demo</i>
            </a>
            <span> | </span>
            <a
              className={s.link}
              target="blank"
              href="https://github.com/SerhiyStepanov/goit-react-hw-08-phonebook"
            >
              <i>Source code</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
