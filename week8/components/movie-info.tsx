import exp from "constants";
import { API_URL } from "../app/(home)/page";

async function getMovies(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovies(id);
  return (
    <div>
      <h1>{movies.title}</h1>
      <h2>{movies.tagline}</h2>
      <h3>{movies.overview}</h3>
      <h4>{movies.release_date}</h4>
      <h5>{movies.runtime}</h5>
    </div>
  );
}
