"use client";

import { useTranslation } from "react-i18next";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { customerTypes } from "../../constants/types";
import { Customer } from "../../constants/types";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

const handleEdit = (row: Customer) => () => {
  // TODO: Implement edit functionality
  console.log("Edit", row);
};

const handleDelete = (id: string) => () => {
  // TODO: Implement delete functionality
  console.log("Delete", id);
};

export const getColumns = (): ColumnDef<Customer>[] => {
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
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.name")}
        />
      ),
      cell: ({ row }) => {
        const type = customerTypes.find(
          (type) => type.value === row.original.customerType
        );

        return (
          <div className="flex space-x-2">
            <span className="min-w-[100px] max-w-[300px] truncate font-medium">
              {row.getValue("name")}
            </span>
            {type && <Badge variant="outline">{type.label}</Badge>}
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return row.original.name.toLocaleLowerCase().includes(value);
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.email")}
        />
      ),
      cell: ({ row }) => row.getValue("email"),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.phone")}
        />
      ),
      cell: ({ row }) => row.getValue("phone"),
      enableSorting: false,
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
      accessorKey: "representative",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.representative")}
        />
      ),
      cell: ({ row }) => row.getValue("representative"),
      enableSorting: false,
    },
    {
      accessorKey: "manager",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.manager")}
        />
      ),
      cell: ({ row }) => row.getValue("manager"),
      enableSorting: false,
    },
    {
      accessorKey: "referrer",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={t("table.columns.referrer")}
        />
      ),
      cell: ({ row }) => row.getValue("referrer"),
      enableSorting: false,
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
