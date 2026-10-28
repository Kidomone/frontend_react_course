import styles from './Request.module.css';

export default function Request() {
  return (
    <section className={styles.request}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>Самые умные проекты</h2>
            <p className={styles.subtitle}>Реализуем самые смелые решения в России!</p>
          </div>
          <button type="button" className={styles.button}>
            Ваш запрос
          </button>
        </div>
      </div>
    </section>
  );
}
