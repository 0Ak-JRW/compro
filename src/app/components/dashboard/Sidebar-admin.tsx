"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import { MdOutlineDashboard, MdOutlineGamepad } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";
import { TbFileReport } from "react-icons/tb";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          "fixed inset-0  bg-opacity-30 z-40 transition-opacity duration-200 sm:hidden",
          open ? "block" : "hidden"
        )}
        onClick={() => setOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700",
          open ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0 sm:z-40"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/viewDash"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* <Icon
                  icon="mage:dashboard-fill"
                  className="text-4xl text-[#0055ff]"
                /> */}
                <MdOutlineDashboard className="text-xl" />
                <span className="ms-3">View Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/gameMet"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* <Icon
                  icon="icon-park-twotone:game-ps"
                  className="text-4xl text-[#0055ff]"
                /> */}
                <MdOutlineGamepad className="text-xl" />
                <span className="ms-3">Game Metrics</span>
              </a>
            </li>
            <li>
              <a
                href="/manageUser"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* <Icon
                  icon="material-symbols:manage-accounts-rounded"
                  className="text-4xl text-[#0055ff]"
                /> */}
                <LuUserCog className="text-xl" />
                <span className="ms-3">Manage Users accounts</span>
              </a>
            </li>
            <li>
              <a
                href="/manageRep"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* <Icon
                  icon="icon-park-twotone:table-report"
                  className="text-4xl text-[#0055ff]"
                /> */}
                <TbFileReport className="text-xl" />
                <span className="ms-3">Manage Reports</span>
              </a>
            </li>
          </ul>
          <div>
            <div className="bg-gray-800 border-t border-gray-700 text-white text-center text-xs p-2">
              <p>&copy; 2024 Pixel Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
