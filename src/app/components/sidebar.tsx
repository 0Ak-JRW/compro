"use client";

import React from "react";

const sidebarItems = [
    { label: "View Dashboard", href: "#" },
    { label: "Game Metrics", href: "#" },
    { label: "Manage Users accounts", href: "#" },
    { label: "Manage Reports", href: "#" },
];

const Sidebar: React.FC = () => (
    <aside className="w-80 h-screen bg-gray-900 text-white flex justify-center">
        <nav className="flex items-center justify-center">
            <ul className="list-none p-0 m-0 space-y-10 lg:w-72 w-auto">
                {sidebarItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="flex items-center text-black px-6 py-3 rounded-xl transition-colors hover:bg-gray-400 bg-[#D0D0D0] w-full"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
);

export default Sidebar;
