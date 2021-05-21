import { SiWebpack } from "react-icons/si";
import { FaGithub, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import s from "./techSkills.module.css";

export default function TechSkills() {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Tech skills</h3>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/JavaScript"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <IoLogoJavascript className={s.icon} />
              <p className={s.text}>JavaScript</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/HTML5"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <FaHtml5 className={s.icon} />
              <p className={s.text}>HTML5</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/CSS"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <FaCss3Alt className={s.icon} />
              <p className={s.text}>CSS3</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/Git"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <FaGithub className={s.icon} />
              <p className={s.text}>Git</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/React"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <FaReact className={s.icon} />
              <p className={s.text}>React.js</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/Webpack"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <SiWebpack className={s.icon} />
              <p className={s.text}>Webpack</p>
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <a
              href="https://uk.wikipedia.org/wiki/Adobe_Photoshop"
              target="_blank"
              title="uk.wikipedia.org"
              className={s.link}
            >
              <DiPhotoshop className={s.icon} />
              <p className={s.text}>Adobe Photoshop</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
