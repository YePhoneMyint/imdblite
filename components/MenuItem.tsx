import { IconProps } from "@radix-ui/react-icons/dist/types";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Prop {
  title: string;
  address: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

const MenuItem = ({ title, address, Icon }: Prop) => {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="h-6 w-6 sm:hidden" />
      <p className="hidden text-sm uppercase sm:block">{title}</p>
    </Link>
  );
};

export default MenuItem;
