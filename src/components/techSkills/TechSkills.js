import { SiWebpack } from "react-icons/si";
import { FaGithub, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import s from "./techSkills.module.css";

export default function TechSkills() {
  return (
    <div className={s.box}>
      <h4 className={s.title}>Tech skills:</h4>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.itemBox}>
            <IoLogoJavascript className={s.icon} />
            <p className={s.text}>JavaScript</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <FaHtml5 className={s.icon} />
            <p className={s.text}>HTML5</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <FaCss3Alt className={s.icon} />
            <p className={s.text}>CSS3</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <FaGithub className={s.icon} />
            <p className={s.text}>Git</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <FaReact className={s.icon} />
            <p className={s.text}>React.js</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <SiWebpack className={s.icon} />
            <p className={s.text}>Webpack</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.itemBox}>
            <DiPhotoshop className={s.icon} />
            <p className={s.text}>Adobe Photoshop</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
