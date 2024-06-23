"use client";

import { useTranslation } from "react-i18next";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { SiteVisit } from "../../constants/types";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

const handleDelete = (id: string) => () => {
  // TODO: Implement delete functionality
  console.log("Delete", id);
};

export const getColumns = (): ColumnDef<SiteVisit>[] => {
  const { t } = useTranslation();
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px] data-[state=checked]:border-primary"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px] data-[state=checked]:border-primary"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "project_no",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.project_no")}
        />
      ),
      cell: ({ row }) => row.getValue("project_no"),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "project_name",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.project_name")}
        />
      ),
      cell: ({ row }) => row.getValue("project_name"),
      enableSorting: false,
      filterFn: (row, id, value) => {
        return row.original.project_name.toLocaleLowerCase().includes(value);
      },
      enableHiding: false,
    },
    {
      accessorKey: "district",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.district")}
        />
      ),
      cell: ({ row }) => row.getValue("district"),
      enableSorting: false,
    },
    {
      accessorKey: "province",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.province")}
        />
      ),
      cell: ({ row }) => row.getValue("province"),
      enableSorting: false,
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.address")}
        />
      ),
      cell: ({ row }) => row.getValue("address"),
      enableSorting: false,
    },
    {
      accessorKey: "employee_in_charge.name",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.employee_in_charge.name")}
        />
      ),
      cell: ({ row }) => row.original.employee_in_charge.name,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "employee_in_charge.email",
      accessorKey: "employee_in_charge.email",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.employee_in_charge.email")}
        />
      ),
      cell: ({ row }) => row.original.employee_in_charge.email,
      enableSorting: false,
    },
    {
      id: "employee_in_charge.phone",
      accessorKey: "employee_in_charge.phone",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.employee_in_charge.phone")}
        />
      ),
      cell: ({ row }) => row.original.employee_in_charge.phone,
      enableSorting: false,
    },
    {
      accessorKey: "subcontractor",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.subcontractor")}
        />
      ),
      cell: ({ row }) => row.getValue("subcontractor"),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "site_visit_date",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.site_visit_date")}
        />
      ),
      cell: ({ row }) => row.getValue("site_visit_date"),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions row={row} handleDelete={handleDelete(row.id)} />
      ),
    },
  ];
};
