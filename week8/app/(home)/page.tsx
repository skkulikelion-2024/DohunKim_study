import Link from "next/link";
import Movie1 from "../../components/movie1";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const movie = await getMovies(); // only hitting api once
  return (
    <div className={styles.container}>
      {movie.map((it) => {
        return (
          <Movie1
            key={it.id}
            title={it.title}
            id={it.id}
            poster_path={it.poster_path}
          />
        );
      })}
    </div>
  );
}
