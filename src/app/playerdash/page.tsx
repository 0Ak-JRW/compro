"use client";
import { useState } from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function playerdash() {
  const users = [{ name: "Teddy", job: "Ambulance" }];

  return (
    <div className="bg-[#EDF0F7] min-h-screen text-white">
      <div className="flex flex-col justify-center items-center pt-10 space-y-4 container mx-auto">
        <img
          src="/images/profile.png"
          alt="profile"
          className="w-[268px] h-[268px] rounded-full object-cover border-8 border-[#2D3648]"
        />

        <div className="text-black text-3xl font-light text-center">
          {users.map((user, index) => (
            <div key={index} className="space-y-4">
              <p>Name : {user.name}</p>
              <p>Job : {user.job}</p>
            </div>
          ))}
        </div>

        <div className="py-24 w-full space-y-32">
          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
            <div className="bg-[#2D3648] rounded-2xl w-[400px] h-[220px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
