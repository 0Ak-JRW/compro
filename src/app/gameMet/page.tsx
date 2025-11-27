"use client";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { MdOutlineGamepad } from "react-icons/md";



interface GameStats {
  secessionTrend?: any;
  playerEngagement?: number[];
  [key: string]: any;
}

export default function GameMetPage() {
  const [stats, setStats] = useState<GameStats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`);
        const data = response.data;
        setStats(data.data);
      } catch (error) {
        console.error("Error fetching game metrics:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Game Metrics Stats:", stats);
  return (
    <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <div id="viewDash" className="min-h-screen container mx-auto bg-[var(--background)] text-[var(--on-surface)]">
        <div className="flex items-end justify-start space-x-4">
          <MdOutlineGamepad className="text-6xl" />
          <h1 className="text-4xl font-bold">Game Metrics</h1>
        </div>

        <div className="pt-10 pb-32 w-full space-y-20 container mx-auto">
          <div className="flex flex-col items-center space-y-20">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[300px] "></div>
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full p-8">
              <div className="grid grid-cols-3 gap-8 h-[200px]">
                {/* Player Engagement */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Player Engagement</h3>
                    <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-xs">i</div>
                  </div>
                  <div className="flex items-end gap-1 h-32">
                    {stats?.secessionTrend?.map((height: number, i: number) => (
                      <div key={i} className="w-8 bg-[#4A5568] rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Session Length */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Session Length</h3>
                    <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-xs">i</div>
                  </div>
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 100 100" className="transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#4A5568" strokeWidth="12" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#6B8CAE"
                        strokeWidth="12"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * (stats?.sessionLength.percent || 0) / 100)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">{stats?.sessionLength.percent}%</div>
                  </div>
                </div>

                {/* Session Frequency */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Secesion Frequency</h3>
                    <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-xs">i</div>
                  </div>
                  <svg viewBox="0 0 200 100" className="w-full h-32">
                    <polyline
                      points={stats?.secessionTrend?.map((value: number, index: number) => {
                        const x = (index / (stats.secessionTrend.length - 1)) * 200;
                        const y = 100 - value;
                        return `${x},${y}`;
                      }).join(' ') || '0,50 200,50'}
                      fill="none"
                      stroke="#6B8CAE"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full p-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">Technical and Performance</h2>
                <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-xs">i</div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Bug Reports */}
                <div>
                  <h3 className="text-sm text-gray-400 mb-4">Bug Reports</h3>
                  <svg viewBox="0 0 200 80" className="w-full h-20">
                    <polyline
                      points={stats?.reportMetrics?.map((value: number, index: number) => {
                        const x = (index / (stats.reportMetrics.length - 1)) * 200;
                        const y = 80 - (value / Math.max(...stats.reportMetrics) * 60);
                        return `${x},${y}`;
                      }).join(' ') || '0,40 50,35 100,45 150,30 200,25'}
                      fill="none"
                      stroke="#6B8CAE"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Latency */}
                <div>
                  <h3 className="text-sm text-gray-400 mb-4">Latency</h3>
                  <div className="flex items-center gap-4">
                    <svg viewBox="0 0 120 60" className="w-32 h-16">
                      <polyline
                        points={stats?.latency?.latencyGraph.map((value: number, index: number) => {
                          const x = (index / (stats.latency.latencyGraph.length - 1)) * 120;
                          const y = 60 - (value / Math.max(...stats.latency.latencyGraph) * 40) - 10;
                          return `${x},${y}`;
                        }).join(' ') || '0,30 30,28 60,32 90,29 120,31'}
                        fill="none"
                        stroke="#6B8CAE"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="text-4xl font-bold">{stats?.latency?.latencyAvg || 84} <span className="text-lg text-gray-400">ms</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
