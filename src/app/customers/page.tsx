"use client";

import { Customer } from "@/components/customers/columns";
import { CustomersTable } from "@/components/customers/customers-table";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

// Sample customer data
const customers: Customer[] = [
  {
    id: "CUST001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    totalOrders: 15,
    totalSpent: 1250.0,
    lastOrder: "2024-03-15",
    status: "active",
  },
  {
    id: "CUST002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    address: "456 Park Ave, Boston, MA 02108",
    totalOrders: 8,
    totalSpent: 850.0,
    lastOrder: "2024-03-10",
    status: "active",
  },
  {
    id: "CUST003",
    name: "Michael Brown",
    email: "m.brown@email.com",
    phone: "+1 (555) 345-6789",
    address: "789 Oak St, Chicago, IL 60601",
    totalOrders: 3,
    totalSpent: 350.0,
    lastOrder: "2024-02-28",
    status: "inactive",
  },
  {
    id: "CUST004",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+1 (555) 456-7890",
    address: "321 Pine Rd, Los Angeles, CA 90001",
    totalOrders: 12,
    totalSpent: 1100.0,
    lastOrder: "2024-03-12",
    status: "active",
  },
  {
    id: "CUST005",
    name: "Robert Wilson",
    email: "r.wilson@email.com",
    phone: "+1 (555) 567-8901",
    address: "654 Maple Dr, Miami, FL 33101",
    totalOrders: 5,
    totalSpent: 450.0,
    lastOrder: "2024-03-01",
    status: "active",
  },
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleNewCustomer = () => {
    console.log("Create new customer");
  };

  const handleViewCustomer = (customer: Customer) => {
    console.log("View customer:", customer);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader text="Customers" />
      <main className="flex-1 space-y-4 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleNewCustomer}>Add Customer</Button>
        </div>
        <CustomersTable customers={filteredCustomers} onViewCustomer={handleViewCustomer} />
      </main>
    </div>
  );
}
