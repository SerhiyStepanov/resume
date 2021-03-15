import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts({ children }) {
  return (
    <div className={s.box}>
      <h4 className={s.title}>Contacts</h4>
      <ul className={s.list}>
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
              <FaEnvelope />
            </span>
            <a
              className={s.link}
              target="_blank"
              href="mailto:serhiystepanov@ukr.net"
            >
              serhiystepanov@ukr.net
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
              github.com/SerhiyStepanov
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
