"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/app/theme/ThemeProvider";
import Sidebar from "./Sidebar-admin";

const SHOW_PATHS = ["/viewDash", "/gameMet", "/manageUser", "/manageRep", "/RepDetail"];// เพิ่ม path ที่ต้องการให้โว์ Navbar

export default function Navbar() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
    const shouldShow = SHOW_PATHS.some((path) =>
    pathname === path || pathname.startsWith(path + "/")
  );
  if (!shouldShow) return null;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Open sidebar"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setSidebarOpen(true)}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"/>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src="/images/logo.png" className="h-8 me-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white">Dashboard</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to light" : "Switch to dark"}
              >
                {theme === "dark" ? (
                  // sun icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm0 15a.75.75 0 01.75.75V20a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm9-6.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5H20a.75.75 0 01.75.75zM6.75 12a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zm10.78 5.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM4.36 4.36a.75.75 0 011.06 0L6.48 5.4a.75.75 0 11-1.06 1.06L4.36 5.42a.75.75 0 010-1.06zm13.18-1.06a.75.75 0 010 1.06L16.48 5.4a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM6.48 18.6a.75.75 0 10-1.06 1.06l1.06 1.06a.75.75 0 101.06-1.06L6.48 18.6z" clipRule="evenodd"/></svg>
                ) : (
                  // moon icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M21.752 15.002A9 9 0 1112.998 2.25a.75.75 0 01.727.978 7.501 7.501 0 008.049 9.947.75.75 0 01.978.727z" clipRule="evenodd"/></svg>
                )}
              </button>
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user" />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dark:bg-gray-700
                      transition-all duration-200 ease-out
                      animate-fade-in-dropdown"
                    style={{
                      opacity: dropdownOpen ? 1 : 0,
                      transform: dropdownOpen
                        ? "translateY(0)"
                        : "translateY(-10px)",
                    }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
}