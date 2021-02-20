import Main from "./components/mainView";
import SideBar from "./components/sideBarView";

import s from "./app.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <SideBar />

      <Main />
    </div>
  );
}
