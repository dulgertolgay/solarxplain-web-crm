import Link from "next/link";
import Image from "next/image";
import {
  Home,
  LineChart,
  Package,
  DraftingCompass,
  Settings,
  CirclePercent,
  Calculator,
} from "lucide-react";

import Logo from "images/logos/logo.svg";

const SideNav = () => {
  return (
    <aside className="inset-y z-20 flex min-h-full flex-col border-r w-[170px]">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src={Logo}
            alt="solarXplain Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="">solarXplain</span>
        </Link>
      </div>
      <nav className="grid items-start px-2 py-2 text-sm font-medium lg:px-2">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Package className="h-4 w-4" />
          Projects
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <DraftingCompass className="h-4 w-4" />
          Discovery
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <CirclePercent className="h-4 w-4" />
          Offers
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Calculator className="h-4 w-4" />
          Feasibility
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <LineChart className="h-4 w-4" />
          Analytics
        </Link>
      </nav>
      <nav className="mt-auto flex flex-col items-start gap-4 px-2 py-2 text-sm font-medium">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default SideNav;
