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
import { AlertCircle, Calendar, CheckCircle, Clock, Ellipsis, Package } from "lucide-react";

export type OrderStatus = "Scheduled" | "In Progress" | "Delivered" | "Cancelled";
export type OrderService = "Wash & Fold" | "Dry Clean" | "Rush Wash";

export interface Order {
  id: string;
  customer: string;
  address: string;
  status: OrderStatus;
  date: string;
  time: string;
  service: OrderService;
  amount: string;
}

interface OrderWithActions extends Order {
  onViewOrder: (order: Order) => void;
  onStatusChange: (orderId: string, newStatus: OrderStatus) => void;
}

const getStatusIcon = (status: OrderStatus) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "In Progress":
      return <Clock className="h-5 w-5 text-blue-500" />;
    case "Scheduled":
      return <Calendar className="h-5 w-5 text-yellow-500" />;
    case "Cancelled":
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    default:
      return <Package className="h-5 w-5 text-gray-500" />;
  }
};

const getStatusBadgeVariant = (status: OrderStatus) => {
  switch (status) {
    case "Delivered":
      return "default";
    case "In Progress":
      return "secondary";
    case "Scheduled":
      return "outline";
    case "Cancelled":
      return "destructive";
    default:
      return "outline";
  }
};

export const columns: ColumnDef<OrderWithActions>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.id}</div>;
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      return (
        <div>
          <div>{row.original.customer}</div>
          <div className="text-xs text-gray-500">{row.original.address}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {getStatusIcon(row.original.status)}
          <Badge variant={getStatusBadgeVariant(row.original.status)}>{row.original.status}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date & Time",
    cell: ({ row }) => {
      return (
        <div>
          <div>{row.original.date}</div>
          <div className="text-xs text-gray-500">{row.original.time}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => {
      return <div>{row.original.service}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.amount}</div>;
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
            <DropdownMenuItem onClick={() => row.original.onViewOrder(row.original)}>
              View Order
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => row.original.onStatusChange(row.original.id, "Delivered")}
            >
              Mark as Delivered
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => row.original.onStatusChange(row.original.id, "In Progress")}
            >
              Mark as In Progress
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => row.original.onStatusChange(row.original.id, "Cancelled")}
            >
              Cancel Order
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
