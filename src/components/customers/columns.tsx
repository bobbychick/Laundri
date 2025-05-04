"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis, Mail, Phone } from "lucide-react";

export type CustomerStatus = "active" | "inactive";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  status: CustomerStatus;
}

interface CustomerWithActions extends Customer {
  onViewCustomer: (customer: Customer) => void;
}

const getStatusBadgeVariant = (status: CustomerStatus) => {
  switch (status) {
    case "active":
      return "default";
    case "inactive":
      return "destructive";
    default:
      return "outline";
  }
};

export const columns: ColumnDef<CustomerWithActions>[] = [
  {
    accessorKey: "id",
    header: "Customer ID",
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.id}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.name}</div>;
    },
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{row.original.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{row.original.phone}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalOrders",
    header: "Total Orders",
    cell: ({ row }) => {
      return <div>{row.original.totalOrders}</div>;
    },
  },
  {
    accessorKey: "totalSpent",
    header: "Total Spent",
    cell: ({ row }) => {
      return <div>${row.original.totalSpent.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
    cell: ({ row }) => {
      return <div>{row.original.lastOrder}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge variant={getStatusBadgeVariant(row.original.status)}>{row.original.status}</Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => row.original.onViewCustomer(row.original)}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>Edit Customer</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
