import photo from "../image/photo.jpg";
import logo from "./logo.svg";
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import s from "./sideBar.module.css";

export default function SideBar({ children }) {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <img src={photo} alt="Serhiy" className={s.photo} />
      </div>

      <div className={s.box}>
        <h4 className={s.title}>Contacts</h4>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.thumb}>
              <span className={s.span}>
                <FaPhoneAlt /> :
              </span>
              <a className={s.link} href="tel:380676731000">
                +380676731000
              </a>
            </div>
          </li>
          <li className={s.listItem}>
            <div className={s.thumb}>
              <span className={s.span}>
                <FaEnvelope /> :
              </span>
              <a className={s.link} href="mailto:tanja.anja.sergej@gmail.com">
                tanja.anja.sergej@gmail.com
              </a>
            </div>
          </li>
          <li className={s.listItem}>
            <div className={s.thumb}>
              <span className={s.span}>
                <FaGithub /> :
              </span>
              <a className={s.link} href="https://github.com/SerhiyStepanov">
                https://github.com/SerhiyStepanov
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className={s.box}>
        <h4 className={s.title}>Tech skils</h4>
        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.text}>HTML5</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>CSS3</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>JavaScript</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>GIT WebPack</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>React.js</p>
          </li>
        </ul>
      </div>
      <div className={s.box}>
        <h4 className={s.title}>Soft skils</h4>
        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.text}>Scrum</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>Agile</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>GTD</p>
          </li>
          <li className={s.listItem}>
            <p className={s.text}>Teamwork</p>
          </li>
        </ul>
      </div>
      <img src={logo} className={s.Applogo} alt="logo" />
    </div>
  );
}
