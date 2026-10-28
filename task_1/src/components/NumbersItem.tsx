import styles from './NumbersItem.module.css';

type Props = {
  count: number;
  unit: string;
  description: string;
};

export default function NumbersItem({ count, unit, description }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.count}>{count}</div>
      <div className={styles.unit}>{unit}</div>
      <div className={styles.desc}>{description}</div>
    </div>
  );
}
