"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <aside
      id="default-sidebar"
      className={clsx(
        "fixed top-20 left-0 z-40 w-72 h-screen transition-transform bg-gray-50 dark:bg-gray-800",
        open ? "translate-x-0" : "-translate-x-full",
        "sm:translate-x-0"
      )}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-10 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li className="space-y-10">
            <a
              href="viewDash"
              className="flex items-center p-2 text-gray-900 rounded-xl dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group bg-[#D0D0D0]"
            >
              <span className="ms-3 text-xl">View Dashboard</span>
            </a>
            <a
              href="gameMet"
              className="flex items-center p-2 text-gray-900 rounded-xl dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group bg-[#D0D0D0]"
            >
              <span className="ms-3 text-xl">Game Metrics</span>
            </a>
            <a
              href="manageUser"
              className="flex items-center p-2 text-gray-900 rounded-xl dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group bg-[#D0D0D0]"
            >
              <span className="ms-3 text-xl">Manage Users Accounts</span>
            </a>
            <a
              href="manageRep"
              className="flex items-center p-2 text-gray-900 rounded-xl dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group bg-[#D0D0D0]"
            >
              <span className="ms-3 text-xl">Manage Reports</span>
            </a>
          </li>
        </ul>
      </div>
      {/* Overlay สำหรับ mobile */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-200",
          open ? "block sm:hidden" : "hidden"
        )}
        onClick={() => setOpen(false)}
      />
    </aside>
  );
}
