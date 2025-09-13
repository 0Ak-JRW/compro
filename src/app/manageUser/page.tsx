"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";

export default function manageUsers() {
  return (
    <div className="bg-[#EDF0F7] text-white pl-72 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen">
        <div className="flex items-end justify-start space-x-4">
          <Icon
            icon="material-symbols:manage-accounts-rounded"
            className="text-6xl text-[#2D3648] mt-10 ml-10"
          />
          <h1 className="text-[#2D3648] text-4xl">Manage Users Accounts</h1>
        </div>

        <div className="pt-10 pb-32 w-full space-y-5 container mx-auto">
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
