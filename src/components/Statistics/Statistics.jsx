import css from './Statistic.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  let spanClass;
  if (positivePercentage < 40) {
    spanClass = css.negativeSpan;
  } else if (positivePercentage >= 33 && positivePercentage < 66) {
    spanClass = css.neutralSpan;
  } else {
    spanClass = css.positiveSpan;
  }
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>
        Positive feedback:
        <span className={spanClass}> {positivePercentage}%</span>
      </li>
    </ul>
  );
};
