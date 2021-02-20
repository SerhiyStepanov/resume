import Main from "./components/main";
import SideBar from "./components/sideBar";

import s from "./app.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <SideBar />

      <Main />
    </div>
  );
}
