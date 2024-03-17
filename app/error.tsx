"use client";

import { useEffect } from "react";

interface Prop {
  error: any;
  reset: () => void;
}

const Page = ({ error, reset }: Prop) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Page;
