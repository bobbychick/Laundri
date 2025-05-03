import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { columns, incomingColumns } from "@/components/columns";
import { DataTable } from "@/components/data-tabletest";

const orders = [
  {
    id: "ORD-5842",
    recipient: "Jennifer Parker",
    service: "Wash & Iron",
    status: "In Transit",
    actions: "View | Track",
  },
  {
    id: "ORD-5841",
    recipient: "Robert Thompson",
    service: "Dry Clean",
    status: "Processing",
    actions: "View | Update",
  },
  {
    id: "ORD-5840",
    recipient: "Sophia Nguyen",
    service: "Wash & Fold",
    status: "Ready for Pickup",
    actions: "View | Notify",
  },
  {
    id: "ORD-5839",
    recipient: "Marcus Johnson",
    service: "Express Wash",
    status: "Delivered",
    actions: "View | Receipt",
  },
  {
    id: "ORD-5838",
    recipient: "Elena Rodriguez",
    service: "Delicate Items",
    status: "Delivered",
    actions: "View | Receipt",
  },
  {
    id: "ORD-5837",
    recipient: "Thomas Wilson",
    service: "Bedding Special",
    status: "Scheduled",
    actions: "View | Reschedule",
  },
  {
    id: "ORD-5836",
    recipient: "Aisha Patel",
    service: "Wash & Fold",
    status: "Processing",
    actions: "View | Update",
  },
  {
    id: "ORD-5835",
    recipient: "Daniel Martinez",
    service: "Eco-Friendly Wash",
    status: "Scheduled",
    actions: "View | Reschedule",
  },
  {
    id: "ORD-5834",
    recipient: "Laura Kim",
    service: "Commercial Linens",
    status: "In Transit",
    actions: "View | Track",
  },
  {
    id: "ORD-5833",
    recipient: "Jason Wright",
    service: "Premium Press",
    status: "Ready for Pickup",
    actions: "View | Notify",
  },
  {
    id: "ORD-5832",
    recipient: "Samantha Miller",
    service: "Specialty Stain Removal",
    status: "Processing",
    actions: "View | Update",
  },
  {
    id: "ORD-5831",
    recipient: "Carlos Vega",
    service: "Wash & Iron",
    status: "Delivered",
    actions: "View | Receipt",
  },
];

const incoming = [
  {
    service: "Wash & Fold",
    name: "John Smith",
    garments: 15,
  },
  {
    service: "Dry Clean",
    name: "Sarah Lee",
    garments: 8,
  },
  {
    service: "Wash & Iron",
    name: "Mike Brown",
    garments: 12,
  },
  {
    service: "Express Wash",
    name: "Lisa Wang",
    garments: 10,
  },
  {
    service: "Specialty Clean",
    name: "Tom Davis",
    garments: 6,
  },
  {
    service: "Eco-Friendly",
    name: "Emma Clark",
    garments: 14,
  },
  {
    service: "Bedding Special",
    name: "Alex Kim",
    garments: 4,
  },
  {
    service: "Stain Removal",
    name: "Sam Patel",
    garments: 9,
  },
];

export function SectionCards() {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 lg:px-6">
      <Card className="col-span-2 shadow-none">
        <CardHeader>
          <CardTitle>Your Current Orders</CardTitle>
          <CardDescription>Ongoing Orders</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={orders} />
        </CardContent>
      </Card>
      <Card className="shadow-none ">
        <CardHeader>
          <CardTitle>Orders being delivered</CardTitle>
          <CardDescription>Incoming/Outgoing Deliveries</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={incomingColumns} data={incoming} />
        </CardContent>
      </Card>
    </div>
  );
}
