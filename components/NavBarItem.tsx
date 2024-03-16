"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Prop {
  title: string;
  param: string;
}

const NavBarItem = ({ title, param }: Prop) => {
  const searchParam = useSearchParams().get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`font-semibold hover:text-amber-600 ${param == searchParam && "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8"}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
