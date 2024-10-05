import { Link } from "react-router-dom/dist";
import styles from "./BlogCard.module.css";

export const BlogCard = ({
  src,
  href,
  Title,
  Author,
  Alt,
  Date,
  Description,
}) => {
  return (
    <Link to={href} className={styles.blogCard}>
      <img src={src} alt={Alt} />
      <div className={styles.blogInfo}>
        <h3>{Title}</h3>
        <p className={styles.blogMeta}>
          {Author} • {Date}
        </p>
        <p className={styles.blogDescription}>{Description}</p>
      </div>
    </Link>
  );
};
