"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Mock data for support requests
const supportRequests = [
  {
    id: "SR-2024-001",
    subject: "Billing Issue",
    status: "Resolved",
    date: "2024-04-15",
    description: "I was charged twice for my monthly subscription.",
  },
  {
    id: "SR-2024-002",
    subject: "Order Tracking",
    status: "In Progress",
    date: "2024-04-18",
    description: "My order ORD-3420 is not showing the correct status.",
  },
  {
    id: "SR-2024-003",
    subject: "Account Access",
    status: "Open",
    date: "2024-04-20",
    description: "I can't log in to my account.",
  },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ subject: "", category: "", description: "" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader text="Support" />
      <main className="flex-1 space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Open Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">1</p>
              <p className="text-sm text-gray-500 mt-2">Active support tickets</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">2h</p>
              <p className="text-sm text-gray-500 mt-2">Average response time</p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">Resolution Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light">95%</p>
              <p className="text-sm text-gray-500 mt-2">Issues resolved</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Submit a Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="orders">Orders & Delivery</SelectItem>
                      <SelectItem value="account">Account & Access</SelectItem>
                      <SelectItem value="technical">Technical Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about your issue"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Recent Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportRequests.map((request) => (
                  <div key={request.id} className="flex flex-col space-y-2 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{request.subject}</p>
                        <p className="text-sm text-gray-500">{request.id}</p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          request.status === "Resolved"
                            ? "bg-green-100 text-green-800"
                            : request.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{request.date}</p>
                    <p className="text-sm">{request.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
