import Link from "next/link";
import MenuItem from "./MenuItem";
import { HomeIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
      <div className="flex gap-5">
        <MenuItem title="home" address="/" Icon={HomeIcon} />
        <MenuItem title="about" address="/about" Icon={InfoCircledIcon} />
      </div>
      <Link href="/" className="flex items-center gap-3">
        <ModeToggle />
        <div className="flex items-center gap-1">
          <span className="rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold">
            IMDb
          </span>
          <span className="hidden text-xl sm:block">Lite</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
