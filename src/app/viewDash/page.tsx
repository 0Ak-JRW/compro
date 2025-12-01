"use client";
import React, { useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";

import { TrendingUp } from "lucide-react";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, PieChart, Pie, Sector, Label, Cell } from "recharts"

interface PieSectorDataItem {
  outerRadius?: number;
  [key: string]: any;
}

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";

export const description = "An interactive pie chart"

const chartData = [
  { month: "january", desktop: 186, mobile: 80 },
  { month: "february", desktop: 305, mobile: 200 },
  { month: "march", desktop: 237, mobile: 120 },
  { month: "april", desktop: 173, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
]
// const playerData = [
//   { name: "Player1", kills: 150 },
//   { name: "Player2", kills: 120 },
//   { name: "Player3", kills: 100 },
//   { name: "Player4", kills: 90 },
//   { name: "Player5", kills: 80 },
// ];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "visitors",
  },
  desktop: {
    label: "Desktop",
    color: "desktop",
  },
  mobile: {
    label: "Mobile",
    color: "mobile",
  },
  january: {
    label: "January",
    color: "chart-1",
  },
  february: {
    label: "February",
    color: "chart-2",
  },
  march: {
    label: "March",
    color: "chart-3",
  },
  april: {
    label: "April",
    color: "chart-4",
  },
  may: {
    label: "May",
    color: "chart-5",
  },
} satisfies ChartConfig

export default function ViewDash() {
  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState(chartData[0].month)
  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => chartData.map((item) => item.month), [])
  const [playerData, setPlayerData] = React.useState<{ name: string; kills: number }[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/user-activity`);
        const data = response.data;
        const players = data.data.map((user: any) => ({
          name: user.firstname + " " + user.lastname,
          kills: user.kill,
        }));
        console.log("Fetched Player Data:", data);
        setPlayerData(players);
        
      } catch (error) {
        console.error("Error fetching game metrics:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="pl-64 pt-10 min-h-screen bg-gradient-to-br from-[var(--background)] to-[var(--surface)]">
      <div id="viewDash" className="min-h-screen container mx-auto px-6">
      <div className="flex items-end justify-start space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
        <MdOutlineDashboard className="text-5xl text-white" />
        </div>
        <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          View Dashboard
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor your analytics and performance</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 container mx-auto">
        <div className="py-10 w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-[var(--surface)] border border-[var(--border-card)] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Monthly Visitors</CardTitle>
            <CardDescription className="text-xs">January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
              <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-xs"
              />
              <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--desktop)" radius={8} />
              <Bar dataKey="mobile" fill="var(--mobile)" radius={8} />
            </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm pt-4 border-t border-[var(--border-card)]">
            <div className="flex gap-2 leading-none font-medium text-green-600">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none text-xs">
            Showing total visitors for the last 6 months
            </div>
          </CardFooter>
          </Card>

          <Card className="bg-[var(--surface)] border border-[var(--border-card)] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Player Activity</CardTitle>
            <CardDescription className="text-xs">
            Top performers statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
            <div className="grid grid-cols-2 gap-6 text-xs font-semibold pb-3 border-b-2 border-[var(--border-card)] text-muted-foreground uppercase tracking-wide">
              <div>Player</div>
              <div className="text-right">Kills</div>
            </div>
            <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              {playerData.map((player, index) => (
              <div key={index} className="grid grid-cols-2 gap-6 text-sm p-2 rounded-lg hover:bg-[var(--background)] transition-colors duration-200">
                <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold">
                  {index + 1}
                </span>
                <span className="font-medium">{player.name}</span>
                </div>
                <div className="text-right font-bold text-purple-600">{player.kills}</div>
              </div>
              ))}
            </div>
            </div>
          </CardContent>
          </Card>

          <Card data-chart={id} className="flex flex-col bg-[var(--surface)] border border-[var(--border-card)] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm">
          <ChartStyle id={id} config={chartConfig} />
          <CardHeader className="flex-row items-start space-y-0 pb-4">
            <div className="grid gap-1">
            <CardTitle className="text-xl">Interactive Chart</CardTitle>
            <CardDescription className="text-xs">January - June 2024</CardDescription>
            </div>
            <Select value={activeMonth} onValueChange={setActiveMonth}>
            <SelectTrigger
              className="ml-auto h-8 w-[130px] rounded-lg pl-2.5 border-[var(--border-card)] hover:bg-[var(--background)] transition-colors"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent align="end" className="rounded-xl">
              {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]
              if (!config) {
                return null
              }
              return (
                <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex hover:bg-[var(--background)]"
                >
                <div className="flex items-center gap-2 text-xs">
                  <span
                  className="flex h-3 w-3 shrink-0 rounded-full shadow-md"
                  style={{
                    backgroundColor: `var(--${config?.color})`,
                  }}
                  />
                  {config?.label}
                </div>
                </SelectItem>
              )
              })}
            </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="flex flex-1 justify-center pb-0">
            <ChartContainer
            id={id}
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[240px]"
            >
            <PieChart>
              <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              />
              <Pie
              data={chartData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                <Sector {...props} outerRadius={outerRadius + 10} />
                <Sector
                  {...props}
                  outerRadius={outerRadius + 25}
                  innerRadius={outerRadius + 12}
                />
                </g>
              )}
              >
              {chartData.map((entry, index) => (
                <Cell
                key={`cell-${index}`}
                fill={`var(--${chartConfig[entry.month as keyof typeof chartConfig]?.color})`}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-3xl font-bold"
                    >
                    {chartData[activeIndex].desktop.toLocaleString()}
                    </tspan>
                    <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground text-sm"
                    >
                    Visitors
                    </tspan>
                  </text>
                  )
                }
                }}
              />
              </Pie>
            </PieChart>
            </ChartContainer>
          </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1">
          <Card className="bg-gradient-to-br from-[var(--surface)] to-[var(--background)] border border-[var(--border-card)] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm min-h-[260px] flex items-center justify-center">
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg">Additional Analytics Coming Soon</p>
          </CardContent>
          </Card>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}