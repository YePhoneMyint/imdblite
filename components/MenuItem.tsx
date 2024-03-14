import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Prop {
  title: string;
  address: string;
  Icon: LucideIcon;
}

const MenuItem = ({ title, address, Icon }: Prop) => {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:block text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
