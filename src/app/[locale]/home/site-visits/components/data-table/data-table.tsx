"use client";

import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { SiteVisit } from "../../constants/types";

import { DataTable } from "@/components/data-table/data-table";
import { getColumns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";

interface SiteVisitsDataTableProps {
  siteVisits: SiteVisit[];
}

const SiteVisitsDataTable = ({ siteVisits }: SiteVisitsDataTableProps) => {
  const [table, setTable] = useState<Table<SiteVisit> | null>(null);

  const handleTableData = (table: Table<SiteVisit>) => {
    setTable(table);
  };
  return (
    <DataTable
      data={siteVisits}
      columns={getColumns()}
      sendTableData={handleTableData}
    >
      {table && <DataTableToolbar table={table} />}
    </DataTable>
  );
};

export default SiteVisitsDataTable;
