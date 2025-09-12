"use client";
import { useState } from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function ViewDash() {
  const users = [{ name: "Teddy", job: "Ambulance" }];

  return (
    <div className="bg-[#EDF0F7] min-h-screen text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 container mx-auto">
        <div className="py-24 w-full space-y-20">
          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[320px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[320px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[320px] h-[320px] "></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-full h-[320px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
