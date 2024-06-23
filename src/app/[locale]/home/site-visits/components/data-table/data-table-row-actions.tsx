"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { siteVisitSchema } from "../../constants/types";
import { useTranslation } from "react-i18next";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  handleDelete: () => void;
}

export function DataTableRowActions<TData>({
  row,
  handleDelete,
}: DataTableRowActionsProps<TData>) {
  const { t } = useTranslation();
  const siteVisit = siteVisitSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Link href={`/home/site-visits/${siteVisit.id}`}>
          <DropdownMenuItem>{t("table.actions.edit")}</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>
          {t("table.actions.delete")}
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
