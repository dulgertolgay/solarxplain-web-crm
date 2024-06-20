"use client";

import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { Project } from "../../constants/types";

import { DataTable } from "@/components/data-table/data-table";
import { getColumns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";

interface ProjectsDataTableProps {
  projects: Project[];
}

const ProjectsDataTable = ({ projects }: ProjectsDataTableProps) => {
  const [table, setTable] = useState<Table<Project> | null>(null);

  const handleTableData = (table: Table<Project>) => {
    setTable(table);
  };
  return (
    <DataTable
      data={projects}
      columns={getColumns()}
      sendTableData={handleTableData}
    >
      {table && <DataTableToolbar table={table} />}
    </DataTable>
  );
};

export default ProjectsDataTable;
