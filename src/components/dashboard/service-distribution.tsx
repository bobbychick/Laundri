"use client";
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

const chartData = [
  { date: "2025-04-01", "Wash & Fold": 8, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2025-04-02", "Wash & Fold": 9, "Dry Clean": 4, "Express Wash": 3 },
  { date: "2025-04-03", "Wash & Fold": 7, "Dry Clean": 6, "Express Wash": 3 },
  { date: "2025-04-04", "Wash & Fold": 10, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2025-04-05", "Wash & Fold": 8, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2025-04-06", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 4 },
  { date: "2025-04-07", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2025-04-08", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2025-04-09", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2025-04-10", "Wash & Fold": 10, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2025-04-11", "Wash & Fold": 9, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2025-04-12", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2025-04-13", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2025-04-14", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2025-04-15", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2025-04-16", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2025-04-17", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2025-04-18", "Wash & Fold": 11, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2025-04-19", "Wash & Fold": 10, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2025-04-20", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2025-04-21", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2025-04-22", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2025-04-23", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2025-04-24", "Wash & Fold": 15, "Dry Clean": 10, "Express Wash": 8 },
  { date: "2025-04-25", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2025-04-26", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2025-04-27", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2025-04-28", "Wash & Fold": 11, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2025-04-29", "Wash & Fold": 10, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2025-04-30", "Wash & Fold": 9, "Dry Clean": 5, "Express Wash": 4 },
];

const chartConfig = {
  "Wash & Fold": {
    label: "Wash & Fold",
    color: "hsl(var(--color-theme-one))",
  },
  "Dry Clean": {
    label: "Dry Clean",
    color: "hsl(var(--color-theme-two))",
  },
  "Express Wash": {
    label: "Express Wash",
    color: "hsl(var(--color-theme-five))",
  },
} satisfies ChartConfig;

export function ServiceDistribution() {
  const [timeRange, setTimeRange] = React.useState("90d");
  const isMobile = useIsMobile();

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-04-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-col md:flex-row items-center gap-2 space-y-0 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Service Distribution</CardTitle>
          <CardDescription>Showing service distribution for the last 3 months</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select a value">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
          <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="fillWashFold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-theme-one)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-theme-one)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillDryClean" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-theme-two)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-theme-two)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillExpressWash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-theme-five)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-theme-five)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Wash & Fold"
              type="natural"
              fill="url(#fillWashFold)"
              stroke="var(--color-theme-one)"
              stackId="a"
            />
            <Area
              dataKey="Dry Clean"
              type="natural"
              fill="url(#fillDryClean)"
              stroke="var(--color-theme-two)"
              stackId="a"
            />
            <Area
              dataKey="Express Wash"
              type="natural"
              fill="url(#fillExpressWash)"
              stroke="var(--color-theme-five)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
