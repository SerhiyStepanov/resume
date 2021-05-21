import s from "./summary.module.css";

export default function Summary() {
  return (
    <div>
      <h3 className={s.title}>Summary</h3>
      <p className={s.text}>
        I have just completed a 10-month <span className={s.goit}>"GoIT"</span>
        IT school training course. In this course I studied: HTML, CSS,
        JavaScript, React. Now I am looking for a job as a Front-End developer
        (React).
      </p>
    </div>
  );
}
