"use client";

import { DataTable } from "@/components/data-tabletest";
import { columns, Customer } from "./columns";

interface CustomersTableProps {
  customers: Customer[];
  onViewCustomer: (customer: Customer) => void;
}

export function CustomersTable({ customers, onViewCustomer }: CustomersTableProps) {
  const data = customers.map((customer) => ({
    ...customer,
    onViewCustomer,
  }));

  return <DataTable columns={columns} data={data} />;
}
