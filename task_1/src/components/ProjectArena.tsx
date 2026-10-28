import styles from './ProjectArena.module.css';

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectArena({ title, description, image }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.line} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
