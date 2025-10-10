"use client";
import React from "react";
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

export const description = "An interactive pie chart"

const chartData = [
  { month: "january", desktop: 186, mobile: 80},
  { month: "february", desktop: 305, mobile: 200},
  { month: "march", desktop: 237, mobile: 120},
  { month: "april", desktop: 173, mobile: 190},
  { month: "may", desktop: 209, mobile: 130},
]

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


  return (
    <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <div id="viewDash" className="min-h-screen container mx-auto bg-[var(--background)] text-[var(--on-surface)]">
        <div className="flex items-end justify-start space-x-4">
          <MdOutlineDashboard className="text-6xl" />
          <h1 className="text-4xl font-bold">View Dashboard</h1>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 container mx-auto">
          <div className="py-10 w-full space-y-20">
            <div className="flex justify-between items-center gap-6">
              <Card className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full">
                <CardHeader>
                  <CardTitle>Bar Chart - Multiple</CardTitle>
                  <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar dataKey="desktop" fill="var(--desktop)" radius={4} />
                      <Bar dataKey="mobile" fill="var(--mobile)" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                  <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                  </div>
                </CardFooter>
              </Card>
              {/* <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] ">

              </div> */}
              {/* <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "> */}
              <Card className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full  ">
                <CardHeader>
                  <CardTitle>Area Chart</CardTitle>
                  <CardDescription>
                    Showing total visitors for the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <AreaChart
                      accessibilityLayer
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
                        fill="var(--desktop)"
                        fillOpacity={0.4}
                        stroke="var(--desktop)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 leading-none font-medium">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="text-muted-foreground flex items-center gap-2 leading-none">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card data-chart={id} className="flex flex-col bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full ">
                <ChartStyle id={id} config={chartConfig} />
                <CardHeader className="flex-row items-start space-y-0 pb-0">
                  <div className="grid gap-1">
                    <CardTitle>Pie Chart - Interactive</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                  </div>
                  <Select value={activeMonth} onValueChange={setActiveMonth}>
                    <SelectTrigger
                      className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                      aria-label="Select a value"
                    >
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                      {months.map((key) => 
                      {
                        const config = chartConfig[key as keyof typeof chartConfig]
                        // console.log(config?.color );
                        if (!config) {
                          return null
                        }
                        return (
                          <SelectItem
                            key={key}
                            value={key}
                            className="rounded-lg [&_span]:flex"
                          >
                          
                            <div className="flex items-center gap-2 text-xs">
                              <span
                                className="flex h-3 w-3 shrink-0 rounded-xs"
                                // className={`flex h-3 w-3 shrink-0 rounded-xs bg-[${key}]`}
                                style={{
                                  // backgroundColor: `var(--color-${key})`,
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
                    className="mx-auto aspect-square w-full max-w-[300px]"
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
                          // console.log(chartConfig[entry.month as keyof typeof chartConfig]?.color ),
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
                                    className="fill-muted-foreground"
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
              {/* </div> */}
              {/* <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "></div> */}
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}