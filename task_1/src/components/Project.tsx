import ProjectArena from './ProjectArena';
import stadium from '../assets/stadium.jpg';
import styles from './Project.module.css';

export default function Project() {
  const text = 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития на следующие десятилетия. Мы очень рады данному еву.';

  const projects = [
    { id: 1, title: 'Арена', description: text, image: stadium },
    { id: 2, title: 'Арена', description: text, image: stadium },
    { id: 3, title: 'Арена', description: text, image: stadium },
  ];

  return (
    <section className={styles.project}>
      <div className="container">
        <h2 className={styles.title}>Наши самые большие проекты</h2>
        <div className={styles.list}>
          {projects.map((item) => (
            <ProjectArena
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
