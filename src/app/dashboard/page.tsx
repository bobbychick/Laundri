import { ServiceDistribution } from "@/components/dashboard/service-distribution";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionCards } from "@/components/section-cards";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-2 bg-accent">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ServiceDistribution />
          </div>
        </div>
      </div>
    </>
  );
}
