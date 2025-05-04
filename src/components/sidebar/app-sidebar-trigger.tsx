"use client";
import { cn } from "@/lib/utils";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export function AppSidebarTrigger() {
  const { state } = useSidebar();

  return (
    <SidebarTrigger
      className={cn(
        "fixed top-2.5 left-2.5 z-40",
        state === "expanded" && "bg-sidebar border-none shadow-none"
      )}
      variant={"outline"}
      size={"icon"}
    />
  );
}
