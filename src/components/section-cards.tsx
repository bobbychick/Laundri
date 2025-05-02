import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-3 @5xl/main:grid-cols-3">
      <Card className="@container/card @xl/main:col-span-2 h-[48vh]">
        <CardHeader>
          <CardDescription>Ongoing Orders</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Your Current Orders
          </CardTitle>
          <div className="w-full h-[calc(66vh-8rem)] overflow-auto">
            <DataTable columns={columns} data={orders} />
          </div>
          <CardAction>
            {/* <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge> */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          {/* <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card h-[48vh]">
        <CardHeader>
          <CardDescription>Incoming/Outgoing Deliveries</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Orders being delivered
          </CardTitle>
          <CardAction>
            <Badge variant="outline"></Badge>
          </CardAction>
        </CardHeader>
        <div className="px-4">
          <DataTable columns={incomingColumns} data={incoming} />
        </div>
        <CardFooter className="flex-col items-start gap-1.5 text-sm"></CardFooter>
      </Card>
    </div>
  );
}
