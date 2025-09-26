import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { TbFileReport } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import SearchBox from "../components/SearchBox";

type Report = {
  subject: string;
  description: string;
  dateTime: string;
  player: string;
  status: "In progress" | "Solved";
};

const reports: Report[] = [
  {
    subject: "Bug",
    description: "เข้าเซิร์ฟแต่บัคในตัวเกมหลอดอาหารไม่ขึ้นอะไรเลย แก้ยังไงครับ",
    dateTime: "1-05-2025 12:24",
    player: "Teddy",
    status: "In progress",
  },
  {
    subject: "Player",
    description: "พวกเราใช้โปรแกรมช่วยเล่น ตรวจสอบให้หน่อยครับ",
    dateTime: "29-04-2025 14:56",
    player: "Oakky",
    status: "Solved",
  },
  {
    subject: "Player",
    description: "พูดจาใช้คำไม่สุภาพรบกวนดูย้อนหลังให้ทีครับ",
    dateTime: "27-04-2025 18:23",
    player: "Folky",
    status: "Solved",
  },
  {
    subject: "Bug",
    description: "เข้าเซิร์ฟแล้วเด้งออกตลอดเลยครับ",
    dateTime: "25-04-2025 09:12",
    player: "MewMew",
    status: "In progress",
  },
];

const truncate = (text: string, max: number) =>
  text.length > max ? text.slice(0, max) + "..." : text;

export default function ManageReports() {
  return (
    <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <div id="viewDash" className="min-h-screen container mx-auto">
        <div className="flex items-end justify-between">
          <div className="flex items-end space-x-4">
            <TbFileReport className="text-6xl" />
            <h1 className="text-4xl font-bold">Manage User’s Reports</h1>
          </div>
          <div className="flex">
            <SearchBox />
          </div>
        </div>

        <div className="pt-10 pb-32 w-full space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg h-[160px] p-6">
              <h2 className="text-lg font-medium">Total Reports</h2>
              <p className="text-3xl font-bold mt-2">123</p>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg h-[160px] p-6">
              <h2 className="text-lg font-medium">Last 7-Days Reports</h2>
              <p className="text-3xl font-bold mt-2">45</p>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full h-[520px]">
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto pr-1">
                <table className="w-full text-left table-fixed border-separate border-spacing-y-2">
                  <colgroup>
                    <col className="w-1/6" />  {/* Subject */}
                    <col className="w-1/6" />  {/* Description */}
                    <col className="w-1/6" />  {/* Date Time */}
                    <col className="w-1/6" />  {/* Player */}
                    <col className="w-1/6" />  {/* Status */}
                    <col className="w-1/6" />  {/* View */}
                  </colgroup>
                  <thead className="sticky top-0 z-10">
                    <tr className="text-sm">
                      <th className="px-4 py-3 bg-[var(--primary-container)] rounded-l-xl text-[var(--on-primary-container)] font-medium">
                        Subject
                      </th>
                      <th className="px-4 py-3 bg-[var(--primary-container)] text-[var(--on-primary-container)] font-medium">
                        Description
                      </th>
                      <th className="px-4 py-3 bg-[var(--primary-container)] text-center text-[var(--on-primary-container)] font-medium">
                        Date Time
                      </th>
                      <th className="px-4 py-3 bg-[var(--primary-container)] text-center text-[var(--on-primary-container)] font-medium">
                        Player
                      </th>
                      <th className="px-4 py-3 bg-[var(--primary-container)] text-center text-[var(--on-primary-container)] font-medium">
                        Status
                      </th>
                      <th className="px-4 py-3 bg-[var(--primary-container)] rounded-r-xl text-center text-[var(--on-primary-container)] font-medium">
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {reports.map((report, index) => {
                      const isInProgress = report.status === "In progress";
                      return (
                        <tr key={index}>
                          <td className="px-4 py-3 bg-[var(--surface-variant)] rounded-l-xl">
                            {report.subject}
                          </td>
                          <td className="px-4 py-3 bg-[var(--surface-variant)]">
                            <div className="truncate">
                              {truncate(report.description, 20)}
                            </div>
                          </td>
                          <td className="px-4 py-3 bg-[var(--surface-variant)] text-center">
                            {report.dateTime}
                          </td>
                          <td className="px-4 py-3 bg-[var(--surface-variant)] text-center">
                            {report.player}
                          </td>
                          <td className="px-4 py-3 bg-[var(--surface-variant)] text-center">
                            <span
                              className={`font-medium ${isInProgress ? "text-yellow-400" : "text-emerald-400"
                                }`}
                            >
                              {report.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 bg-[var(--surface-variant)] rounded-r-xl">
                            <div className="flex items-center justify-center">
                              <button
                                aria-label="View"
                                className="p-1 rounded hover:bg-white/10 transition-colors"
                              >
                                <FiEye className="text-lg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
