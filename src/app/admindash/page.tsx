"use client";
import React from "react";
import ViewDash from "../components/adminDash/viewDash";
import GameMet from "../components/adminDash/gameMet";

export default function admindash() {
  return (
    <div className="bg-[#EDF0F7] text-white grid grid-cols-[1fr_5fr]">
      <div />
      <div>
        <ViewDash />
        {/* <GameMet /> */}
      </div>
    </div>
  );
}
