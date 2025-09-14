import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { TbFileReport } from "react-icons/tb";

export default function manageReports() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-64 pt-10 min-h-screen">
      <div
        id="viewDash"
        className="bg-[#EDF0F7] text-white min-h-screen container mx-auto"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-end justify-start space-x-4">
            <TbFileReport className="text-6xl text-[#2D3648]" />
            <h1 className="text-[#2D3648] text-4xl font-bold">
              Manage User’s Reports
            </h1>
          </div>

          <div className="flex space-x-12">
            <div className="bg-[#2D3648] rounded-2xl w-[300px] h-[160px]"></div>
            <div className="bg-[#2D3648] rounded-2xl w-[300px] h-[160px]"></div>
          </div>
        </div>

        <div className="pt-10 pb-32 w-full space-y-5 container mx-auto">
          <div className="flex items-center">
            <div className="bg-[#2D3648] rounded-2xl w-full h-[700px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
