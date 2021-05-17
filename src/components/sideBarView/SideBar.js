import Photo from "../photo";
import Contacts from "../contacts";
import TechSkills from "../techSkills";
import SoftSkills from "../softSkills";
import logo from "./logo.svg";

import s from "./sideBar.module.css";

export default function SideBar({ children }) {
  return (
    <div className={s.container}>
      <Photo />

      <Contacts />

      <TechSkills />

      <SoftSkills />

      <div style={{ marginTop: "auto" }}>
        <img src={logo} className={s.Applogo} alt="logo React" />
      </div>
    </div>
  );
}
