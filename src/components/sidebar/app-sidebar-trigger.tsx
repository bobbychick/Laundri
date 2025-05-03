"use client";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "../ui/sidebar";

export function AppSidebarTrigger() {
  return (
    <SidebarTrigger
      className={cn(
        "fixed top-2.5 left-2.5 z-40",
        "peer-data-[state=expanded]:bg-sidebar peer-data-[state=expanded]:border-none peer-data-[state=expanded]:shadow-none"
      )}
      variant={"outline"}
      size={"icon"}
    />
  );
}
