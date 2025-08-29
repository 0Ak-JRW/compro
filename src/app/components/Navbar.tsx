"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" bg-gray-900 text-white">
            {/* Navbar */}
            <nav className="bg-gray-800 border-b h-20 border-gray-700 flex justify-center items-center px-4 py-3">
                <div className="container w-full mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                            <img src="images/logo.png" alt="Logo" className="w-fit h-fit" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            HOME
                        </a>
                        <a href="/playerdash" className="text-gray-300 hover:text-white transition-colors font-medium">
                            PLAYER DASHBOARD
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">
                            CONTACT US
                        </a>
                        <FiUsers className="w-4 h-4 mr-1" />
                        XXX PLAYERS ONLINE
                    </div>

                    {/* Navigation Links - Tablet */}
                    <div className="hidden md:flex lg:hidden items-center space-x-4">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-xs">
                            HOME
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">
                            DASHBOARD
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-xs">
                            CONTACT
                        </a>
                        <div className="flex items-center text-red-500 font-bold text-xs">
                            <FiUsers className="w-3 h-3 mr-1" />
                            XXX ONLINE
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <div className="flex items-center text-red-500 font-bold text-xs">
                            <FiUsers className="w-3 h-3 mr-1" />
                            XXX
                        </div>
                        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-xs">
                            Menu
                        </button>
                    </div>

                    {/* Login Button */}
                    <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg transition-colors font-medium">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}