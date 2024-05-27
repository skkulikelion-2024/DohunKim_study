import Link from "next/link";

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
    <div>
      {movie.map((it) => {
        return (
          <li key={it.id}>
            <Link href={`/movies/${it.id}`}>{it.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
