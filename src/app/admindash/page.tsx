"use client";
import React from "react";
import Sidebar from "../components/sidebar";
import ViewDash from "./adminpage/viewDash";

export default function admindash() {
  return (
    <div className="bg-[#EDF0F7] min-h-screen text-white grid grid-cols-[1fr_5fr]">
      <div className="">
        <Sidebar />
      </div>

      <div>
        <ViewDash />
      </div>
    </div>
  );
}
