"use client";
import { LuUserCog } from "react-icons/lu";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";

export default function manageUsers() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-64 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen container mx-auto">
        <div className="flex items-end justify-start space-x-4">
          <LuUserCog className="text-6xl text-[#2D3648]" />
          <h1 className="text-[#2D3648] text-4xl font-bold">Manage Users Accounts</h1>
        </div>

        <div className="pt-5 pb-32 w-full space-y-5 container mx-auto">
          <div className="flex justify-end items-center">
            <SearchBox />
          </div>
          <div className="flex items-center">
            <div className="bg-[#2D3648] rounded-2xl w-full h-[700px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
