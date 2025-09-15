"use client";
import { LuUserCog } from "react-icons/lu";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";

export default function manageUsers() {
  return (
    <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <div id="viewDash" className="min-h-screen container mx-auto bg-[var(--background)] text-[var(--on-surface)]">
        <div className="flex items-end justify-start space-x-4">
          <LuUserCog className="text-6xl" />
          <h1 className="text-4xl font-bold">Manage Users Accounts</h1>
        </div>

        <div className="pt-5 pb-32 w-full space-y-5 container mx-auto">
          <div className="flex justify-end items-center">
            <SearchBox />
          </div>
          <div className="flex items-center">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[700px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
