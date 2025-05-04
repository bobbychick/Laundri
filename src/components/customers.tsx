import { Search } from "lucide-react";
import * as React from "react";

// Sample customer data
const customers = [
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

export function CustomersPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const handleNewCustomer = () => {
    console.log("Create new customer");
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
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <button
          onClick={handleNewCustomer}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Add Customer
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search customers..."
            className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Customer ID
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Contact
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Total Orders
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Total Spent
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Last Order
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">{customer.id}</td>
                  <td className="p-4 align-middle font-medium">{customer.name}</td>
                  <td className="p-4 align-middle">
                    <div className="flex flex-col">
                      <span>{customer.email}</span>
                      <span className="text-sm text-muted-foreground">{customer.phone}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{customer.totalOrders}</td>
                  <td className="p-4 align-middle">${customer.totalSpent.toFixed(2)}</td>
                  <td className="p-4 align-middle">{customer.lastOrder}</td>
                  <td className="p-4 align-middle">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        customer.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <button className="text-primary hover:underline">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
