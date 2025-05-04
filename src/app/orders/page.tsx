"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Order, OrderStatus } from "@/components/orders/columns";
import { OrdersTable } from "@/components/orders/orders-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Sample order history data
const orderHistory = [
  {
    id: "ORD-3421",
    customer: "Alex Johnson",
    address: "423 Maple St",
    status: "Delivered",
    date: "2025-04-22",
    time: "14:30",
    service: "Wash & Fold",
    amount: "$34.50",
  },
  {
    id: "ORD-3420",
    customer: "Sarah Williams",
    address: "128 Oak Ave",
    status: "In Progress",
    date: "2025-04-22",
    time: "11:15",
    service: "Dry Clean",
    amount: "$56.75",
  },
  {
    id: "ORD-3419",
    customer: "Michael Chen",
    address: "892 Pine Blvd",
    status: "Scheduled",
    date: "2025-04-23",
    time: "09:00",
    service: "Wash & Fold",
    amount: "$28.50",
  },
  {
    id: "ORD-3418",
    customer: "Emily Rodriguez",
    address: "742 Cedar Ln",
    status: "Delivered",
    date: "2025-04-21",
    time: "16:45",
    service: "Dry Clean",
    amount: "$42.25",
  },
  {
    id: "ORD-3417",
    customer: "David Kim",
    address: "356 Elm St",
    status: "Delivered",
    date: "2025-04-21",
    time: "10:30",
    service: "Wash & Fold",
    amount: "$31.00",
  },
  {
    id: "ORD-3416",
    customer: "Lisa Thompson",
    address: "219 Birch Ave",
    status: "Cancelled",
    date: "2025-04-20",
    time: "13:00",
    service: "Dry Clean",
    amount: "$0.00",
  },
  {
    id: "ORD-3415",
    customer: "James Wilson",
    address: "734 Aspen Dr",
    status: "Delivered",
    date: "2025-04-20",
    time: "09:15",
    service: "Wash & Fold",
    amount: "$27.50",
  },
  {
    id: "ORD-3414",
    customer: "Maria Garcia",
    address: "495 Walnut St",
    status: "Delivered",
    date: "2025-04-19",
    time: "14:45",
    service: "Rush Wash",
    amount: "$48.25",
  },
];

export default function OrdersPage() {
  const [activeView, setActiveView] = useState<"all" | "active" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDetail(true);
  };

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    // In a real application, you would update the order status in your database
    console.log(`Order ${orderId} status changed to ${newStatus}`);
  };

  const filteredOrders = orderHistory.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = dateFilter === "all" || order.date === dateFilter;
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesView =
      activeView === "all" ||
      (activeView === "active" && order.status !== "Delivered" && order.status !== "Cancelled") ||
      (activeView === "completed" &&
        (order.status === "Delivered" || order.status === "Cancelled"));

    return matchesSearch && matchesDate && matchesStatus && matchesView;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader text="Orders" />
      <main className="flex-1 space-y-4 p-4 ">
        <Tabs
          defaultValue="all"
          className="space-y-4"
          value={activeView}
          onValueChange={(value) => setActiveView(value as "all" | "active" | "completed")}
        >
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="active">Active Orders</TabsTrigger>
              <TabsTrigger value="completed">Completed Orders</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center space-x-2">
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-[150px] lg:w-[250px]"
              />
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="h-8 w-[130px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="2024-03-15">Mar 15, 2024</SelectItem>
                  <SelectItem value="2024-03-16">Mar 16, 2024</SelectItem>
                  <SelectItem value="2024-03-17">Mar 17, 2024</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-8 w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <TabsContent value="all" className="space-y-4">
            <OrdersTable
              orders={filteredOrders as Order[]}
              onViewOrder={handleViewOrder}
              onStatusChange={handleStatusChange}
            />
          </TabsContent>
          <TabsContent value="active" className="space-y-4">
            <OrdersTable
              orders={filteredOrders as Order[]}
              onViewOrder={handleViewOrder}
              onStatusChange={handleStatusChange}
            />
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <OrdersTable
              orders={filteredOrders as Order[]}
              onViewOrder={handleViewOrder}
              onStatusChange={handleStatusChange}
            />
          </TabsContent>
        </Tabs>
        {showOrderDetail && selectedOrder && (
          <Card className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <CardContent className="w-full max-w-2xl bg-white p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Order Details</h3>
                <Button variant="ghost" onClick={() => setShowOrderDetail(false)}>
                  Close
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Customer</p>
                    <p className="font-medium">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{selectedOrder.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">{selectedOrder.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{selectedOrder.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{selectedOrder.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service</p>
                    <p className="font-medium">{selectedOrder.service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium">{selectedOrder.amount}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
