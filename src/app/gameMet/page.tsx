"use client";
import React from "react";
import { MdOutlineGamepad  } from "react-icons/md";

export default function GameMetPage() {
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
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[300px] "></div>
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[300px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
