import { SectionCards } from "@/components/dashboard/section-cards";
import { ServiceDistribution } from "@/components/dashboard/service-distribution";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-2 bg-accent p-4">
        <div className="flex flex-col gap-4 ">
          <SectionCards />
          <ServiceDistribution />
        </div>
      </div>
    </>
  );
}
