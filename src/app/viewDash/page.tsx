"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

export default function ViewDash() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-64 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen container mx-auto">
        <div className="flex items-end justify-start space-x-4">
          <MdOutlineDashboard className="text-6xl text-[#2D3648]" />
          <h1 className="text-[#2D3648] text-4xl font-bold">View Dashboard</h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 container mx-auto">
          <div className="py-10 w-full space-y-20">
            <div className="flex justify-between items-center">
              <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[260px] "></div>
              <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[260px] "></div>
              <div className="bg-[#2D3648] rounded-2xl w-[260px] h-[260px] "></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[#2D3648] rounded-2xl w-full h-[260px] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
