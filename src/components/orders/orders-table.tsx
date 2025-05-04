"use client";

import { DataTable } from "@/components/data-tabletest";
import { columns, Order, OrderStatus } from "./columns";

interface OrdersTableProps {
  orders: Order[];
  onViewOrder: (order: Order) => void;
  onStatusChange: (orderId: string, newStatus: OrderStatus) => void;
}

export function OrdersTable({ orders, onViewOrder, onStatusChange }: OrdersTableProps) {
  const data = orders.map((order) => ({
    ...order,
    onViewOrder,
    onStatusChange,
  }));

  return <DataTable columns={columns} data={data} />;
}
