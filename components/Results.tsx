interface Prop {
  results: { id: string; original_title: string }[];
}

const Results = ({ results }: Prop) => {
  return (
    <div>
      {results.map((data) => (
        <div key={data.id}>{data.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
