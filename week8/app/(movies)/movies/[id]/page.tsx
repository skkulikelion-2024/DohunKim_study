import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

interface Iparams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
    description: "Movie Detail",
  };
}

export default async function MovieDetail({ params: { id } }: Iparams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
