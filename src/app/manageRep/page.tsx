import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { TbFileReport } from "react-icons/tb";
import SearchBox from "../components/SearchBox";

export default function manageReports() {
  return (
    <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <div
        id="viewDash"
        className="min-h-screen container mx-auto bg-[var(--background)] text-[var(--on-surface)]"
      >
        <div className="flex items-end justify-between">
          <div className="flex items-end justify-start space-x-4">
            <TbFileReport className="text-6xl" />
            <h1 className="text-4xl font-bold">Manage User’s Reports</h1>
          </div>

          <div className="flex space-x-12">
            <div className="flex justify-center items-center">
              <SearchBox />
            </div>
          </div>
        </div>

        <div className="pt-10 pb-32 w-full space-y-5 container mx-auto">
          <div className="flex gap-6">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[160px]"></div>
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[160px]"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[700px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
