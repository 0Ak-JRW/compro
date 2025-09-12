"use client";
import { useState } from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import { Icon } from '@iconify/react';

export default function ViewDash() {

  return (
    <div id="viewDash" className="bg-[#EDF0F7] text-white min-h-screen">
      <div className="flex items-end justify-start space-x-4">
        <Icon icon="mage:dashboard-fill" className="text-6xl text-[#2D3648] mt-10 ml-10" />
        <h1 className="text-[#2D3648] text-4xl">View Dashboard</h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 container mx-auto">
        <div className="py-10 w-full space-y-20">
          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[260px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[500px] h-[260px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[260px] h-[260px] "></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-full h-[260px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
