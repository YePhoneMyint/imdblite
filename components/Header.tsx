import Link from "next/link";
import MenuItem from "./MenuItem";
import { Home, Info } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between p-3 max-w-6xl mx-auto items-center">
      <div className="flex gap-5">
        <MenuItem title="home" address="/" Icon={Home} />
        <MenuItem title="about" address="/about" Icon={Info} />
      </div>
      <Link href="/" className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className="text-xl hidden sm:block">Lite</span>
      </Link>
    </div>
  );
};

export default Header;
