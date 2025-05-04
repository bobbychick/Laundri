"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock data for invoices
const invoiceHistory = [
  {
    id: "INV-2024-001",
    date: "2024-04-01",
    amount: "$156.75",
    status: "Paid",
    description: "Monthly subscription - April 2024",
  },
  {
    id: "INV-2024-002",
    date: "2024-03-01",
    amount: "$156.75",
    status: "Paid",
    description: "Monthly subscription - March 2024",
  },
  {
    id: "INV-2024-003",
    date: "2024-02-01",
    amount: "$156.75",
    status: "Paid",
    description: "Monthly subscription - February 2024",
  },
  {
    id: "INV-2024-004",
    date: "2024-01-01",
    amount: "$156.75",
    status: "Paid",
    description: "Monthly subscription - January 2024",
  },
];

// Mock data for payment methods
const paymentMethods = [
  {
    id: "pm_1",
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: "pm_2",
    type: "Mastercard",
    last4: "8888",
    expiry: "09/24",
    isDefault: false,
  },
];

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState("invoices");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader text="Billing" />
      <main className="flex-1 space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Next Billing Date</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">May 1, 2024</p>
              <p className="text-sm text-gray-500 mt-2">Monthly subscription renewal</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">Professional</p>
              <p className="text-sm text-gray-500 mt-2">$156.75/month</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Payment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light text-green-600">Active</p>
              <p className="text-sm text-gray-500 mt-2">Last payment: Apr 1, 2024</p>
            </CardContent>
          </Card>
        </div>

        <Tabs
          defaultValue="invoices"
          className="space-y-4"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="billing-details">Billing Details</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-4">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Invoice History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoiceHistory.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{invoice.id}</p>
                        <p className="text-sm text-gray-500">{invoice.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{invoice.amount}</p>
                        <p className="text-sm text-gray-500">{invoice.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment-methods" className="space-y-4">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                          {method.type}
                        </div>
                        <div>
                          <p className="font-medium">•••• {method.last4}</p>
                          <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                        </div>
                      </div>
                      {method.isDefault && (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                          Default
                        </span>
                      )}
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing-details" className="space-y-4">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Billing Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Company Name</p>
                      <p className="font-medium">Laundri Inc.</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Billing Email</p>
                      <p className="font-medium">billing@laundri.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tax ID</p>
                      <p className="font-medium">TAX-123456789</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Billing Address</p>
                      <p className="font-medium">123 Business Ave, Suite 100</p>
                      <p className="font-medium">New York, NY 10001</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Button>Update Billing Details</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
