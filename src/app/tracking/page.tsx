"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock data for delivery tracking
const deliveries = [
  {
    id: "ORD-3420",
    customer: "Sarah Williams",
    address: "128 Oak Ave",
    status: "In Transit",
    driver: "John D.",
    vehicle: "Toyota Camry",
    eta: "15 min",
    lastUpdate: "2 min ago",
    location: "3 blocks away",
    service: "Dry Clean",
    amount: "$56.75",
  },
  {
    id: "ORD-3419",
    customer: "Michael Chen",
    address: "892 Pine Blvd",
    status: "Picked Up",
    driver: "Maria S.",
    vehicle: "Honda Civic",
    eta: "25 min",
    lastUpdate: "5 min ago",
    location: "5 blocks away",
    service: "Wash & Fold",
    amount: "$28.50",
  },
  {
    id: "ORD-3418",
    customer: "Emily Rodriguez",
    address: "742 Cedar Ln",
    status: "Delivered",
    driver: "Alex K.",
    vehicle: "Nissan Altima",
    eta: "Delivered",
    lastUpdate: "30 min ago",
    location: "Delivered",
    service: "Dry Clean",
    amount: "$42.25",
  },
];

export default function TrackingPage() {
  const [activeView, setActiveView] = useState<"all" | "active" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeliveries = deliveries.filter((delivery) => {
    const matchesSearch =
      delivery.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesView =
      activeView === "all" ||
      (activeView === "active" && delivery.status !== "Delivered") ||
      (activeView === "completed" && delivery.status === "Delivered");

    return matchesSearch && matchesView;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader text="Delivery Tracking" />
      <main className="flex-1 space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Active Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">2</p>
              <p className="text-sm text-gray-500 mt-2">Currently in transit</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">
                Average Delivery Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">35 min</p>
              <p className="text-sm text-gray-500 mt-2">Last 24 hours</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">On-time Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">98%</p>
              <p className="text-sm text-gray-500 mt-2">Deliveries on time</p>
            </CardContent>
          </Card>
        </div>

        <Tabs
          defaultValue="all"
          className="space-y-4"
          value={activeView}
          onValueChange={(value) => setActiveView(value as "all" | "active" | "completed")}
        >
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All Deliveries</TabsTrigger>
              <TabsTrigger value="active">Active Deliveries</TabsTrigger>
              <TabsTrigger value="completed">Completed Deliveries</TabsTrigger>
            </TabsList>
            <div className="ml-auto">
              <Input
                placeholder="Search deliveries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-[250px]"
              />
            </div>
          </div>

          <TabsContent value="all">
            <Card className="shadow-none py-0">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDeliveries.map((delivery) => (
                      <TableRow key={delivery.id}>
                        <TableCell className="font-medium">{delivery.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.customer}</p>
                            <p className="text-xs text-gray-500">{delivery.address}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.service}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-0.5 text-xs rounded ${
                              delivery.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : delivery.status === "In Transit"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {delivery.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.driver}</p>
                            <p className="text-xs text-gray-500">{delivery.vehicle}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.location}</p>
                            <p className="text-xs text-gray-500">{delivery.lastUpdate}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.eta}</TableCell>
                        <TableCell>{delivery.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="h-7">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card className="shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDeliveries.map((delivery) => (
                      <TableRow key={delivery.id}>
                        <TableCell className="font-medium">{delivery.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.customer}</p>
                            <p className="text-xs text-gray-500">{delivery.address}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.service}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-0.5 text-xs rounded ${
                              delivery.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : delivery.status === "In Transit"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {delivery.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.driver}</p>
                            <p className="text-xs text-gray-500">{delivery.vehicle}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.location}</p>
                            <p className="text-xs text-gray-500">{delivery.lastUpdate}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.eta}</TableCell>
                        <TableCell>{delivery.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="h-7">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed">
            <Card className="shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDeliveries.map((delivery) => (
                      <TableRow key={delivery.id}>
                        <TableCell className="font-medium">{delivery.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.customer}</p>
                            <p className="text-xs text-gray-500">{delivery.address}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.service}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-0.5 text-xs rounded ${
                              delivery.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : delivery.status === "In Transit"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {delivery.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.driver}</p>
                            <p className="text-xs text-gray-500">{delivery.vehicle}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{delivery.location}</p>
                            <p className="text-xs text-gray-500">{delivery.lastUpdate}</p>
                          </div>
                        </TableCell>
                        <TableCell>{delivery.eta}</TableCell>
                        <TableCell>{delivery.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="h-7">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
