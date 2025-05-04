import { SectionCards } from "@/components/dashboard/section-cards";
import { ServiceDistribution } from "@/components/dashboard/service-distribution";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col bg-accent p-4 gap-4">
        <SectionCards />
        <ServiceDistribution />
      </div>
    </>
  );
}
