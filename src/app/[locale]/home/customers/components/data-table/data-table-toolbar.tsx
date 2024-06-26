"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { File } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { customerTypes, Customer } from "../../constants/types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter";
import CustomerDialog from "../customer-dialog";

interface DataTableToolbarProps<Customer> {
  table: Table<Customer>;
}

export function DataTableToolbar<Customer>({
  table,
}: DataTableToolbarProps<Customer>) {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={t("table.toolbar.searchPlaceholder")}
          value={search}
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
            setSearch(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px] bg-background shadow-sm"
        />
        {table.getColumn("name") && (
          <DataTableFacetedFilter
            column={table.getColumn("name")}
            title={t("table.toolbar.customerTypes.label")}
            options={customerTypes.map((type) => {
              return {
                ...type,
                label: t(`table.toolbar.customerTypes.options.${type.value}`),
              };
            })}
          />
        )}
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {t("table.toolbar.export")}
          </span>
        </Button>
        <DataTableViewOptions table={table} />
        <CustomerDialog />
      </div>
    </div>
  );
}
