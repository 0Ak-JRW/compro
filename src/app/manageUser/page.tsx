"use client";
import { LuUserCog } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import Modal from "../components/Modal";
import { Dropdown, DropdownItem, DropdownDivider } from "../components/Dropdown";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";

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
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBans, setSelectedBans] = useState("Bans");
  const banOptions = [
    "Bans",
    "1 Day",
    "3 Days",
    "7 Days",
    "30 Days",
    "Permanent",
    "Unbans",
  ];

  const handleSubmit = () => {
    setShowModal(false);
    setTime("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/users`)
          .then((response) => {
            console.log("Fetched users:", response.data);
            const users = response.data.data.map(
              (item: any, index: number) => ({
                id: index + 1,
                name: item.firstname + " " + item.lastname,
              })
            );
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
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
      <div
        id="viewDash"
        className="bg-[var(--background)] text-[var(--on-surface)] min-h-screen"
      >
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
                            <button
                              onClick={() => setShowModal(true)}
                              className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium py-1.5 px-4 rounded"
                            >
                              Edit
                            </button>
                            <button className="bg-red-600 hover:bg-red-900 transition-colors text-white text-sm font-medium py-1.5 px-4 rounded">
                              Delete
                            </button>
                          </div>
                          <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                            title="userID: 943752759 | Fullname :Teddy"
                            size="md"
                          >
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Time
                                </label>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  04/26/2025 22:31:49
                                </label>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Reason
                                </label>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  ใช้โปรแกรมโกง
                                </label>
                              </div>

                              <div>
                                <Dropdown
                                  trigger={
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium">
                                      {selectedBans}
                                      <ChevronDown size={18} />
                                    </button>
                                  }
                                >
                                  {banOptions.map((ban) => (
                                    <DropdownItem
                                      key={ban}
                                      label={ban}
                                      onClick={() => setSelectedBans(ban)}
                                    />
                                  ))}
                                </Dropdown>

                                <p className="text-sm text-gray-600">
                                  Selected:{" "}
                                  <span className="font-semibold">
                                    {selectedBans}
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                              <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                              >
                                ยกเลิก
                              </button>
                              <button
                                onClick={handleSubmit}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                              >
                                บันทึก
                              </button>
                            </div>
                          </Modal>
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
