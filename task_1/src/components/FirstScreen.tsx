import styles from './FirstScreen.module.css';

export default function FirstScreen() {
  return (
    <header className={styles.firstScreen}>
      <div className="container">
        <h1 className={styles.title}>
          Реализуем крупнейшие<br />
          проекты в мире
        </h1>
        <p className={styles.subtitle}>
          Стадионы, газопроводы, мосты, дамбы
        </p>
      </div>
    </header>
  );
}
