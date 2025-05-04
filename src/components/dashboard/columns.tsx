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
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Ellipsis } from "lucide-react";
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
    cell: ({ row }) => {
      return <div className="flex items-center gap-2 min-w-32">{row.original.recipient}</div>;
    },
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => {
      return (
        <Badge
          className={cn(
            "rounded-full text-primary",
            row.original.service === "Wash & Fold"
              ? "bg-theme-one text-primary-foreground"
              : row.original.service === "Dry Clean"
              ? "bg-theme-two"
              : "bg-theme-five"
          )}
        >
          {row.original.service}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2 min-w-32">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-primary pl-0"
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 min-w-32">
          <Badge
            className={cn(
              "rounded-full text-primary",
              row.original.status === "Delivered"
                ? "bg-green-500 text-primary-foreground"
                : row.original.status === "In Progress"
                ? "bg-yellow-500 text-primary-foreground"
                : "bg-primary text-primary-foreground"
            )}
          >
            {row.original.status}
          </Badge>
        </div>
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
            <Button variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
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
      return <Button className="h-6 px-3 cursor-pointer">Track</Button>;
    },
  },
];
