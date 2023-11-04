import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ addFeedback, options }) => {
  return (
    <div className={css.wrapper}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => addFeedback(option)}
          className={`${css.button} ${css[`button-${option}`]}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
