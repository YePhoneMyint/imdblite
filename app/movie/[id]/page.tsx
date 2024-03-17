import { Result } from "@/lib/interface";
import Image from "next/image";

interface Prop {
  params: { id: string; name: string };
}

const Page = async ({ params: { id } }: Prop) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY as string}`,
  );
  const result: Result = await res.json();
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col items-center p-4 md:space-x-6 md:pt-8 lg:flex-row">
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          alt="poster"
          width={500}
          height={300}
          //   style={{ width: "auto", height: "auto" }}
          className="h-full max-w-full rounded-lg"
          priority
        />
        <div>
          <h2 className="mb-3 text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="mb-3 text-justify text-lg">{result.overview}</p>
          <p className="mb-3">
            <span className="font-semibold">Date Released: </span>{" "}
            {result.release_date || result.first_air_date}
          </p>
          <p>
            <span className="font-semibold">Vote: </span> {result.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
