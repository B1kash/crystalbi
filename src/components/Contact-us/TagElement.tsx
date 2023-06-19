import styles from "./TagElement.module.css";

interface TagElementProps {
  day: string;
  time: string;
}

const TagElement: React.FC<TagElementProps> = ({ day, time }) => {
  return (
    <div className={styles.tagElement}>
      <div className={styles.dayName}>{day}</div>
      <div className={styles.openingTime}>{time}</div>
    </div>
  );
};

export default TagElement;
