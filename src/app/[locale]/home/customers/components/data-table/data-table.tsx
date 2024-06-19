"use client";

import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { Customer } from "../../constants/types";

import { DataTable } from "@/components/data-table/data-table";
import { getColumns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";

interface CustomersDataTableProps {
  customers: Customer[];
}

const CustomersDataTable = ({ customers }: CustomersDataTableProps) => {
  const [table, setTable] = useState<Table<Customer> | null>(null);

  const handleTableData = (table: Table<Customer>) => {
    setTable(table);
  };
  return (
    <DataTable
      data={customers}
      columns={getColumns()}
      sendTableData={handleTableData}
    >
      {table && <DataTableToolbar table={table} />}
    </DataTable>
  );
};

export default CustomersDataTable;
