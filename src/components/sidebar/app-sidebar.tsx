"use client";
import {
  IconChartBar,
  IconDashboard,
  IconFileWord,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconUsersGroup,
} from "@tabler/icons-react";
import * as React from "react";

import { NavAccount } from "@/components/sidebar/nav-account";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "John",
    email: "John@sunwest.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      id: "dashboard",
    },
    {
      title: "Orders",
      url: "/orders",
      icon: IconListDetails,
      id: "orders",
    },
    {
      title: "Tracking",
      url: "/tracking",
      icon: IconChartBar,
      id: "tracking",
    },
  ],

  account: [
    {
      name: "Customers",
      url: "/customers",
      icon: IconUsersGroup,
    },
    {
      name: "Billing",
      url: "/billing",
      icon: IconReport,
    },
    {
      name: "Support",
      url: "/support",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="border-b flex items-center h-12">
        <SidebarMenuItem className="h-12 flex items-center">
          <Link href="/">
            <div className="flex items-center gap-1">
              <IconInnerShadowTop className="size-5" />
              <span className="text-lg font-semibold">Laundri</span>
            </div>
          </Link>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAccount items={data.account} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
