"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

export default function ViewDash() {
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
              <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "></div>
              <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "></div>
              <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[260px] "></div>
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
