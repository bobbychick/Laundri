"use client";
import { cn } from "@/lib/utils";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export function AppSidebarTrigger() {
  const { state } = useSidebar();

  return (
    <SidebarTrigger
      className={cn(
        "fixed top-3 left-3 z-40",
        state === "expanded" && "bg-sidebar border-none shadow-none"
      )}
      variant={"outline"}
      size={"icon"}
    />
  );
}
