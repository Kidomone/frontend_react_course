import NumbersItem from './NumbersItem';
import styles from './Numbers.module.css';

export default function Numbers() {
  const items = [
    { id: 1, count: 26, unit: 'лет', description: 'на рынке' },
    { id: 2, count: 26, unit: 'лет', description: 'на рынке' },
    { id: 3, count: 26, unit: 'лет', description: 'на рынке' },
    { id: 4, count: 26, unit: 'лет', description: 'на рынке' },
  ];

  return (
    <div className={styles.numbers}>
      <div className="container">
        <div className={styles.card}>
          {items.map((item) => (
            <NumbersItem
              key={item.id}
              count={item.count}
              unit={item.unit}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
