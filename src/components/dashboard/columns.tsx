"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "../ui/badge";

export type Order = {
  id: string;
  recipient: string;
  service: string;
  status: string;
  actions: string;
};

export type IncomingDelivery = {
  service: string;
  name: string;
  garments: number;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "recipient",
    header: "Recipient",
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="bg-theme-five">
          {row.original.service}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <span>View Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Create return delivery</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const incomingColumns: ColumnDef<IncomingDelivery>[] = [
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "garments",
    header: "Pieces",
  },
  {
    id: "track",
    header: "Tracking",
    cell: () => {
      return <Button className="h-6 px-3 ring-2 hover:bg-gray-300">Track</Button>;
    },
  },
];
