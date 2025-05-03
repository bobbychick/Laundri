"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";

export function SiteHeader() {
  const { state } = useSidebar();

  return (
    <header className="flex bg-sidebar h-12 items-center gap-2 border-b px-4">
      <h1 className={cn("text-md font-semibold", state === "collapsed" && "ml-8")}>Dashboard</h1>
    </header>
  );
}
