import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts({ children }) {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Contacts</h3>
      <ul className={s.list}>
        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaEnvelope className={s.icon} />
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
              <FaPhoneAlt className={s.icon} />
            </span>
            <a className={s.link} target="_blank" href="tel:380676731000">
              (+38) 067 673 1000
            </a>
          </div>
        </li>

        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaLinkedinIn className={s.icon} />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="https://www.linkedin.com/in/serhiy-stepanov-a37490210/"
            >
              LinkedIn
            </a>
          </div>
        </li>

        <li className={s.listItems}>
          <div className={s.thumb}>
            <span className={s.span}>
              <FaGithub className={s.icon} />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="https://github.com/SerhiyStepanov"
            >
              GitHub
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
