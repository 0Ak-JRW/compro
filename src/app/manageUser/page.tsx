"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";

const users = [
  { name: "Folky" },
  { name: "Hamsims" },
  { name: "Oakky" },
  { name: "Mungkorn" },
]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((user, index) => ({ id: index + 1, ...user }));

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
            <div className="bg-[#2D3648] rounded-2xl w-full h-[700px] ">
              <div className="p-10 space-y-5">
              <table className="table-auto w-full text-left">
                <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-8 py-2 text-gray-400">#</th>
                  <th className="px-8 py-2 text-gray-400">Name</th>
                  <th className="px-8 py-2 text-gray-400">Manage</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                  <tr
                  key={user.id}
                  className="border-b border-gray-300 hover:bg-gray-700"
                  >
                  <td className="px-8 py-3">{user.id}</td>
                  <td className="px-8 py-3">{user.name}</td>
                  <td className="px-8 py-3">
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded mr-2">
                    Edit
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
                    Delete
                    </button>
                  </td>
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
