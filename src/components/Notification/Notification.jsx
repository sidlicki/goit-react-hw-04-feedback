import css from './Notiflication.module.css';

export const Notification = ({ notification }) => {
  return <h3 className={css.subtitle}>{notification}</h3>;
};
