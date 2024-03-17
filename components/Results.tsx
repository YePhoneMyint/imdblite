import { Result } from "@/lib/interface";
import ResultCard from "./ResultCard";

interface Prop {
  results: Result[];
}

const Results = ({ results }: Prop) => {
  return (
    <div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((data) => (
        <div key={data.id}>
          <ResultCard result={data} />
        </div>
      ))}
    </div>
  );
};

export default Results;
