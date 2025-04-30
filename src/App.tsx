import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import OrdersPage from "@/components/orders"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { CustomersPage } from "@/components/customers"

function Dashboard() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </SidebarProvider>
    </Router>
  )
}
