"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-06-01", "Wash & Fold": 8, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2024-06-02", "Wash & Fold": 9, "Dry Clean": 4, "Express Wash": 3 },
  { date: "2024-06-03", "Wash & Fold": 7, "Dry Clean": 6, "Express Wash": 3 },
  { date: "2024-06-04", "Wash & Fold": 10, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2024-06-05", "Wash & Fold": 8, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2024-06-06", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 4 },
  { date: "2024-06-07", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2024-06-08", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2024-06-09", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2024-06-10", "Wash & Fold": 10, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2024-06-11", "Wash & Fold": 9, "Dry Clean": 5, "Express Wash": 4 },
  { date: "2024-06-12", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2024-06-13", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2024-06-14", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2024-06-15", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2024-06-16", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2024-06-17", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2024-06-18", "Wash & Fold": 11, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2024-06-19", "Wash & Fold": 10, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2024-06-20", "Wash & Fold": 11, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2024-06-21", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2024-06-22", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2024-06-23", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2024-06-24", "Wash & Fold": 15, "Dry Clean": 10, "Express Wash": 8 },
  { date: "2024-06-25", "Wash & Fold": 14, "Dry Clean": 9, "Express Wash": 7 },
  { date: "2024-06-26", "Wash & Fold": 13, "Dry Clean": 8, "Express Wash": 6 },
  { date: "2024-06-27", "Wash & Fold": 12, "Dry Clean": 7, "Express Wash": 6 },
  { date: "2024-06-28", "Wash & Fold": 11, "Dry Clean": 7, "Express Wash": 5 },
  { date: "2024-06-29", "Wash & Fold": 10, "Dry Clean": 6, "Express Wash": 5 },
  { date: "2024-06-30", "Wash & Fold": 9, "Dry Clean": 5, "Express Wash": 4 },
];

const chartConfig = {
  "Wash & Fold": {
    label: "Wash & Fold",
    color: "var(--primary)",
  },
  "Dry Clean": {
    label: "Dry Clean",
    color: "var(--primary)",
  },
  "Express Wash": {
    label: "Express Wash",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("30d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 30;
    if (timeRange === "7d") {
      daysToSubtract = 7;
    } else if (timeRange === "1d") {
      daysToSubtract = 1;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Service Distribution</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Daily service type distribution</span>
          <span className="@[540px]/card:hidden">Service distribution</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="30d">Last month</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
            <ToggleGroupItem value="1d">Last day</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last month" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="30d" className="rounded-lg">
                Last month
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
              <SelectItem value="1d" className="rounded-lg">
                Last day
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillWashFold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Wash & Fold)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-Wash & Fold)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillDryClean" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Dry Clean)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Dry Clean)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillExpressWash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Express Wash)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Express Wash)" stopOpacity={0.1} />
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
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
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
              dataKey="Express Wash"
              type="natural"
              fill="url(#fillExpressWash)"
              stroke="var(--color-Express Wash)"
              stackId="a"
            />
            <Area
              dataKey="Dry Clean"
              type="natural"
              fill="url(#fillDryClean)"
              stroke="var(--color-Dry Clean)"
              stackId="a"
            />
            <Area
              dataKey="Wash & Fold"
              type="natural"
              fill="url(#fillWashFold)"
              stroke="var(--color-Wash & Fold)"
              stackId="a"
            />
            <ChartLegend
              verticalAlign="bottom"
              content={
                <ChartLegendContent
                  className="mt-4"
                  payload={[
                    {
                      value: "Wash & Fold",
                      color: "var(--color-Wash & Fold)",
                    },
                    {
                      value: "Dry Clean",
                      color: "var(--color-Dry Clean)",
                    },
                    {
                      value: "Express Wash",
                      color: "var(--color-Express Wash)",
                    },
                  ]}
                />
              }
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
