"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { File, PlusCircle } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { SiteVisit } from "../../constants/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";

interface DataTableToolbarProps<SiteVisit> {
  table: Table<SiteVisit>;
}

export function DataTableToolbar<SiteVisit>({
  table,
}: DataTableToolbarProps<SiteVisit>) {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={t("table.toolbar.searchPlaceholder")}
          value={search}
          onChange={(event) => {
            table
              .getColumn("SiteVisit_name")
              ?.setFilterValue(event.target.value);
            setSearch(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px] bg-background shadow-sm"
        />
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {t("table.toolbar.export")}
          </span>
        </Button>
        <DataTableViewOptions table={table} />
        <Link href="/home/site-visits/0">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {t("add")}
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
