"use client";
import { LuUserCog } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";

const users = [
  { name: "Folky" },
  { name: "Hamsims" },
  { name: "Oakky" },
  { name: "Mungkorn" },
]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((user, index) => ({ id: index + 1, ...user }));

export default function manageUsers() {

  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/users`).then((response) => {
          console.log("Fetched users:", response.data);
          const users = response.data.data.map((item: any, index: number) => ({
            id: index + 1,
            name: item.firstname + " " + item.lastname,
          }));
          setUsers(users);
        });

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="bg-[var(--background)] text-[var(--on-surface)] pl-72 pt-10 min-h-screen">
      <div id="viewDash" className="bg-[var(--background)] text-[var(--on-surface)] min-h-screen">
        <div className="flex items-end justify-start space-x-4">
          <LuUserCog className="text-6xl text-[var(--on-surface)] mt-10 ml-10" />
          <h1 className="text-4xl font-bold">Manage Users Accounts</h1>
        </div>

        <div className="pt-10 pb-32 w-full space-y-5 container mx-auto">
          <div className="flex justify-end items-center">
            <SearchBox />
          </div>
          <div className="flex items-center">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-2xl w-full h-[700px] ">
              <div className="p-10 space-y-5">
                <table className="w-full text-left border-separate border-spacing-y-3">
                  <thead className="bg-[#39455A] text-white">
                    <tr>
                      <th className="px-6 py-3 rounded-l-xl font-medium w-20">
                        #
                      </th>
                      <th className="px-6 py-3 font-medium text-center">
                        Name
                      </th>
                      <th className="px-6 py-3 rounded-r-xl font-medium w-60">
                        Manage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-3 bg-[#445269] rounded-l-xl text-white">
                          {user.id}
                        </td>
                        <td className="px-6 py-3 bg-[#445269] text-white text-center">
                          {user.name}
                        </td>
                        <td className="px-6 py-3 bg-[#445269] rounded-r-xl">
                          <div className="flex gap-2 justify-start">
                            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium py-1.5 px-4 rounded">
                              Edit
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white text-sm font-medium py-1.5 px-4 rounded">
                              Delete
                            </button>
                          </div>
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
