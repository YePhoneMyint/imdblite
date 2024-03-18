import Results from "@/components/Results";
import { api_key } from "@/lib/keys";

interface Prop {
  searchParams: {
    genre: string;
  };
}

export const revalidate = 15;

const Home = async ({ searchParams: { genre } }: Prop) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${genre == "top-rated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=${api_key}&language=en-US&page=1`,
  );

  if (!res.ok) {
    console.log("Not Fetch");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
