import React from "react";
import { calculateTrendPercentage, cn } from "@/lib/utils";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";

interface StatsCardProps {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMonthCount: number;
}

export function StatsCard(props: StatsCardProps) {
  const { headerTitle, total, currentMonthCount, lastMonthCount } = props;
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );

  const isDecrement = trend === "decrement";

  const chartColor = isDecrement
    ? "#ef4444" /* red-500 */
    : "#22c55e"; /* green-500 */

  const chartData = [
    { desktop: 22 },
    { desktop: 222 },
    { desktop: 257 },
    { desktop: 170 },
    { desktop: 303 },
    { desktop: 120 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: chartColor, // dynamic color
    },
  } satisfies ChartConfig;

  return (
    <article className="stats-card">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h3 className="text-base font-medium">{headerTitle}</h3>
          <div className="content">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-semibold">{total}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img
                className="size-5"
                src={`/assets/icons/${
                  isDecrement ? "arrow-down-red" : "arrow-up-green"
                }.svg`}
                alt="stats"
              />
              <figcaption
                className={cn(
                  "text-sm font-medium",
                  isDecrement ? "text-red-500" : "text-green-600"
                )}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm font-medium text-gray-500 truncate">
              vs last month
            </p>
          </div>
        </div>

        <div className="w-[220px] h-[100px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill={chartColor}
                  fillOpacity={0.4}
                  stroke={chartColor}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </article>
  );
}
