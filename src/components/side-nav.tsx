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
    href: "/home/project",
    icon: Package,
  },
  {
    title: "Site Visit",
    href: "/home/site-visit",
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
        "flex flex-col inset-y z-20 h-screen border-r transition-all duration-300 ease-in-out",
        isCollapsed ? "min-w-[60px] w-[60px]" : "min-w-[150px] w-[150px]"
      )}
    >
      <div
        className={cn(
          "flex h-14 items-center border-b px-3 font-semibold lg:h-[60px]"
        )}
      >
        <Image
          src={Logo}
          alt="solarXplain Logo"
          width={24}
          height={24}
          className={
            isCollapsed
              ? "h-9 w-9 p-1 border border-input shadow-sm rounded-md"
              : "mr-3"
          }
        />
        {!isCollapsed && <span>solarXplain</span>}
      </div>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col grow px-3 py-4">
          <div className="grid gap-2">
            {Links.map((link, index) => (
              <Tooltip
                key={index}
                delayDuration={0}
                disableHoverableContent={!isCollapsed}
              >
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
                      !isCollapsed &&
                        "h-9 w-full text-sm font-medium justify-start px-3",
                      activeLink === link.title.toLocaleLowerCase()
                        ? "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        : "hover:text-primary"
                    )}
                    onClick={() =>
                      setActiveLink(link.title.toLocaleLowerCase())
                    }
                  >
                    <link.icon
                      className={cn("h-5 w-5", !isCollapsed && "mr-3")}
                    />
                    {!isCollapsed && link.title}
                    {!isCollapsed && link.label && (
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
                </TooltipTrigger>
                {isCollapsed && (
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
                )}
              </Tooltip>
            ))}
          </div>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-6 w-6 p-1 border border-input shadow-sm rounded-md mt-auto",
                  !isCollapsed && "ml-auto",
                  isCollapsed && "mx-auto"
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
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              {isCollapsed ? "Expand" : "Collapse"}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </nav>
  );
};

export default SideNav;
