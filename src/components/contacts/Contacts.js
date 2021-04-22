import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts({ children }) {
  return (
    <div className={s.box}>
      <h4 className={s.title}>Contacts</h4>
      <ul className={s.list}>
        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaEnvelope />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="mailto:stepserhiy@gmail.com"
            >
              stepserhiy@gmail.com
            </a>
          </div>
        </li>

        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaPhoneAlt />
            </span>
            <a className={s.link} target="_blank" href="tel:380676731000">
              (+38) 067 673 1000
            </a>
          </div>
        </li>

        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaLinkedinIn />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="https://www.linkedin.com/in/serhiy-stepanov-a37490210/"
            >
              Linkedin
            </a>
          </div>
        </li>

        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaGithub />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="https://github.com/SerhiyStepanov"
            >
              Github
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
