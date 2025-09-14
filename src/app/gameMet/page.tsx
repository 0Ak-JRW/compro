"use client";
import React from "react";
import { MdOutlineGamepad  } from "react-icons/md";

export default function GameMetPage() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-64 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen container mx-auto">
        <div className="flex items-end justify-start space-x-4">
          <MdOutlineGamepad className="text-6xl text-[#2D3648]" />
          <h1 className="text-[#2D3648] text-4xl font-bold">Game Metrics</h1>
        </div>

        <div className="pt-10 pb-32 w-full space-y-20 container mx-auto">
          <div className="flex flex-col items-center space-y-20">
            <div className="bg-[#2D3648] rounded-2xl w-full h-[300px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-full h-[300px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-full h-[300px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
