import Link from "next/link";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie1({ title, id, poster_path }: IMovieProps) {
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
