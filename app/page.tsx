import Results from "@/components/Results";

const API_KEY = process.env.API_KEY as string;

interface Prop {
  searchParams: {
    genre: string;
  };
}

const Home = async ({ searchParams: { genre } }: Prop) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${genre == "top-rated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
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
