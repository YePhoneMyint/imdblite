import { Result } from "@/lib/interface";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Prop {
  result: Result;
}

const ResultCard = ({ result }: Prop) => {
  return (
    <div className="cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          alt="movie poster"
          width={500}
          height={300}
          style={{ width: "auto", height: "auto" }}
          className="transition-opacity duration-300 group-hover:opacity-75 sm:rounded-t-lg"
          priority
        />
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center gap-2">
            {result.release_date || result.first_air_date}{" "}
            <ThumbsUp className="h-4 w-4" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ResultCard;
