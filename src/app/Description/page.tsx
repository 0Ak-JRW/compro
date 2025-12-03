"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { MdDescription } from "react-icons/md";

interface ChartData {
  title: string;
  secessionTrend?: number[];
  sessionLength?: {
    percent: number;
  };
  reportMetrics?: number[];
  latency?: {
    latencyGraph: number[];
    latencyAvg: number;
  };
}

export default function DescriptionPage() {
  const searchParams = useSearchParams();
  const [chartData, setChartData] = React.useState<ChartData | null>(null);

  React.useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        setChartData(decodedData);
      } catch (error) {
        console.error("Error parsing chart data:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="pl-64 pt-10 min-h-screen bg-[#edf0f7] text-[#2d3648]">
      <div
        id="DescriptionPage"
        className="min-h-screen container mx-auto text-[#2d3648]"
      >
        <div className="flex items-end justify-start space-x-4 pb-8">
          <MdDescription className="text-6xl" />
          <h1 className="text-4xl font-bold">Description</h1>
        </div>

        <div className="bg-[#d0d3da] border border-[var(--border-card)] rounded-lg shadow-lg p-8">
          {chartData && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {chartData.title}
              </h2>

              {/* Bar Chart for Secession Trend */}
              {chartData.secessionTrend && (
                <div className="rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Chart Data
                  </h3>
                  {chartData.title.includes("Frequency") ? (
                    <svg viewBox="0 0 200 100" className="w-full h-32">
                      <polyline
                        points={chartData.secessionTrend
                          .map((value: number, index: number) => {
                            const x =
                              (index / (chartData.secessionTrend!.length - 1)) *
                              200;
                            const y = 100 - (value / 100) * 80;
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="none"
                        stroke="#6B8CAE"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    <div className="flex items-end gap-1 h-32">
                      {chartData.secessionTrend.map(
                        (height: number, i: number) => (
                          <div
                            key={i}
                            className="flex-1 bg-[#4A5568] rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Circular Chart for Session Length */}
              {chartData.sessionLength && (
                <div className="bg-[#d0d3da] rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Session Length Percentage
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg
                        viewBox="0 0 100 100"
                        className="transform -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#4A5568"
                          strokeWidth="12"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#6B8CAE"
                          strokeWidth="12"
                          strokeDasharray="251.2"
                          strokeDashoffset={
                            251.2 -
                            (251.2 * chartData.sessionLength.percent) / 100
                          }
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                        {chartData.sessionLength.percent}%
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Charts for Technical and Performance */}
              {(chartData.reportMetrics || chartData.latency) && (
                <div className="bg-[#d0d3da] rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {chartData.reportMetrics && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                          Bug Reports
                        </h3>
                        <svg viewBox="0 0 200 80" className="w-full h-20">
                          <polyline
                            points={chartData.reportMetrics
                              .map((value: number, index: number) => {
                                const x =
                                  (index /
                                    (chartData.reportMetrics!.length - 1)) *
                                  200;
                                const y =
                                  80 -
                                  (value /
                                    Math.max(...chartData.reportMetrics!)) *
                                    60;
                                return `${x},${y}`;
                              })
                              .join(" ")}
                            fill="none"
                            stroke="#6B8CAE"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    )}

                    {chartData.latency && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                          Latency
                        </h3>
                        <div className="flex items-center gap-4">
                          <svg viewBox="0 0 120 60" className="w-32 h-16">
                            <polyline
                              points={chartData.latency.latencyGraph
                                .map((value: number, index: number) => {
                                  const x =
                                    (index /
                                      (chartData.latency!.latencyGraph.length -
                                        1)) *
                                    120;
                                  const y =
                                    60 -
                                    (value /
                                      Math.max(
                                        ...chartData.latency!.latencyGraph
                                      )) *
                                      40 -
                                    10;
                                  return `${x},${y}`;
                                })
                                .join(" ")}
                              fill="none"
                              stroke="#6B8CAE"
                              strokeWidth="2"
                            />
                          </svg>
                          <div className="text-4xl font-bold">
                            {chartData.latency.latencyAvg}{" "}
                            <span className="text-lg text-gray-400">ms</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to the Description page. This is a template page where you
            can add your content.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Clean and modern design</li>
              <li>Responsive layout</li>
              <li>Easy to customize</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
