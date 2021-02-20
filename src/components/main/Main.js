import s from "./main.module.css";

export default function Main({ children }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Front-End Developer</h3>
    </div>
  );
}
