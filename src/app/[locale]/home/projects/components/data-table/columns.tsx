"use client";

import { useTranslation } from "react-i18next";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import {
  siteVisitStatuses,
  offerStatuses,
  projectStatuses,
} from "../../constants/types";
import { Project } from "../../constants/types";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

const handleEdit = (row: Project) => () => {
  // TODO: Implement edit functionality
  console.log("Edit", row);
};

const handleDelete = (id: string) => () => {
  // TODO: Implement delete functionality
  console.log("Delete", id);
};

export const getColumns = (): ColumnDef<Project>[] => {
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
      accessorKey: "dc_power",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.dc_power")}
        />
      ),
      cell: ({ row }) => row.getValue("dc_power"),
      enableSorting: false,
    },
    {
      accessorKey: "ac_power",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.ac_power")}
        />
      ),
      cell: ({ row }) => row.getValue("ac_power"),
      enableSorting: false,
    },
    {
      accessorKey: "site_visit_status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.site_visit_status")}
        />
      ),
      cell: ({ row }) => {
        const status = siteVisitStatuses[row.original.site_visit_status];

        return t(`table.toolbar.siteVisitStatuses.options.${status}`);
      },
      filterFn: (row, id, value) => {
        return value.includes(String(row.original.site_visit_status));
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "offer_status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.offer_status")}
        />
      ),
      cell: ({ row }) => {
        const status = offerStatuses[row.original.offer_status];

        return t(`table.toolbar.offerStatuses.options.${status}`);
      },
      filterFn: (row, id, value) => {
        return value.includes(String(row.original.offer_status));
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "project_status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.project_status")}
        />
      ),
      cell: ({ row }) => {
        const status = projectStatuses[row.original.project_status];

        return t(`table.toolbar.projectStatuses.options.${status}`);
      },
      filterFn: (row, id, value) => {
        return value.includes(String(row.original.project_status));
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          handleEdit={handleEdit(row.original)}
          handleDelete={handleDelete(row.id)}
        />
      ),
    },
  ];
};
