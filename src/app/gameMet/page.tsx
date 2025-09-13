"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function GameMetPage() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-72 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen">
        <div className="flex items-end justify-start space-x-4">
          <Icon
            icon="fa6-solid:gamepad"
            className="text-6xl text-[#2D3648] mt-10 ml-10"
          />
          <h1 className="text-[#2D3648] text-4xl">Game Metrics</h1>
        </div>

        <div className="pt-20 pb-32 w-full space-y-20 container mx-auto">
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
