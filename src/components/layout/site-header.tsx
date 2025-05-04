"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";

export function SiteHeader({ text }: { text: string }) {
  const { state } = useSidebar();

  return (
    <header className="flex bg-sidebar h-12 items-center gap-2 border-b px-4">
      <h1 className={cn("text-md font-semibold ml-8 md:ml-0", state === "collapsed" && "ml-8")}>
        {text}
      </h1>
    </header>
  );
}
