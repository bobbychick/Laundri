import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AppSidebarTrigger } from "@/components/sidebar/app-sidebar-trigger";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { DM_Sans, Merriweather } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Laundri",
  description: "Laundri",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get("sidebar_state");
  const defaultOpen = sidebarCookie ? sidebarCookie.value === "true" : true;

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${merriweather.variable} antialiased`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebarTrigger />
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
