"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
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
  LucideIcon,
  ArrowLeftToLine,
  ArrowRightToLine,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import Logo from "images/logos/logo.svg";

const Links: {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Dashboard",
    href: "/home/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/home/projects",
    icon: Package,
  },
  {
    title: "Discovery",
    href: "/home/discovery",
    icon: DraftingCompass,
  },
  {
    title: "Offers",
    href: "/home/offers",
    icon: CirclePercent,
  },
  {
    title: "Feasibility",
    href: "/home/feasibility",
    icon: Calculator,
  },
  {
    title: "Analytics",
    href: "/home/analytics",
    icon: LineChart,
  },
  {
    title: "Settings",
    href: "/home/settings",
    icon: Settings,
  },
];

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [activeLink, setActiveLink] = React.useState<string>("dashboard");

  return (
    <nav
      className={cn(
        "flex flex-col inset-y z-20 h-screen border-r",
        isCollapsed ? "min-w-[50px]" : "min-w-[145px]"
      )}
    >
      <div
        className={cn(
          "flex h-14 items-center border-b px-2 font-semibold lg:h-[60px]",
          isCollapsed && "justify-center"
        )}
      >
        <Image
          src={Logo}
          alt="solarXplain Logo"
          width={24}
          height={24}
          className={cn(
            "h-9 w-9 p-1",
            isCollapsed && "border border-input shadow-sm rounded-md"
          )}
        />
        {!isCollapsed && <span>solarXplain</span>}
      </div>
      <div className="flex flex-col items-center grow px-2 py-4">
        <div className="grid gap-2">
          <TooltipProvider delayDuration={0}>
            {Links.map((link, index) =>
              isCollapsed ? (
                <Tooltip key={index} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant:
                            activeLink === link.title.toLocaleLowerCase()
                              ? "default"
                              : "ghost",
                          size: "icon",
                        }),
                        activeLink === link.title.toLocaleLowerCase()
                          ? "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          : "hover:text-primary"
                      )}
                      onClick={() =>
                        setActiveLink(link.title.toLocaleLowerCase())
                      }
                    >
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {link.title}
                    {link.label && (
                      <span className="ml-auto text-muted-foreground">
                        {link.label}
                      </span>
                    )}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant:
                        activeLink === link.title.toLocaleLowerCase()
                          ? "default"
                          : "ghost",
                      size: "sm",
                    }),
                    "h-9 w-full text-sm font-medium justify-start px-3",
                    activeLink === link.title.toLocaleLowerCase()
                      ? "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      : "hover:text-primary"
                  )}
                  onClick={() => setActiveLink(link.title.toLocaleLowerCase())}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.title}
                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        activeLink === link.title.toLocaleLowerCase() &&
                          "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                </Link>
              )
            )}
          </TooltipProvider>
        </div>
        <Button
          variant="ghost"
          className={cn(
            "h-6 w-6 p-1 border border-input shadow-sm rounded-md mt-auto",
            !isCollapsed && "ml-auto"
          )}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            document.cookie = `app-sidebar-collapsed=${JSON.stringify(
              isCollapsed
            )}`;
          }}
        >
          {isCollapsed ? (
            <ArrowRightToLine className="h-4 w-4" />
          ) : (
            <ArrowLeftToLine className="h-4 w-4" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default SideNav;
