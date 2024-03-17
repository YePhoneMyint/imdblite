import Results from "@/components/Results";

interface Prop {
  params: { text: string };
}

const Page = async ({ params: { text } }: Prop) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`,
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center text-lg">{text} Not Found.</h1>
      )}

      {results && (
        <div>
          <Results results={results} />
        </div>
      )}
    </div>
  );
};

export default Page;
