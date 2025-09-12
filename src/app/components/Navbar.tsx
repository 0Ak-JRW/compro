"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { FiUsers, FiMenu } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const rootRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleOutside(e: MouseEvent | TouchEvent) {
            const el = rootRef.current;
            if (!el) return;
            // ถ้าคลิกนอกกล่อง dropdown และนอกปุ่ม toggle → ปิด
            if (!el.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside, { passive: true });
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, []);

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
                        <Link href="/#home" className={`hover:text-blue-300 transition-colors font-medium ${pathname === "/" ? "text-blue-300" : "text-gray-300"}`}>
                            HOME
                        </Link>
                        {/* {session && <Link href="/playerdash" className={`hover:text-blue-300 transition-colors font-medium ${pathname === "/playerdash" ? "text-blue-300" : "text-gray-300"}`}>
                            PLAYER DASHBOARD
                        </Link>
                        } */}

                        <Link href="/#contact" className={`text-gray-300 hover:text-white transition-colors font-medium`}>
                            CONTACT US
                        </Link>
                        <FiUsers className="w-4 h-4 mr-1" />
                        XXX PLAYERS ONLINE
                    </div>

                    {/* Navigation Links - Tablet */}
                    <div className="hidden md:flex lg:hidden items-center space-x-4">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-xs">
                            HOME
                        </a>
                        {/* <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">
                            DASHBOARD
                        </a> */}
                        <a href="/#contact" className="text-gray-300 hover:text-white transition-colors text-xs">
                            CONTACT
                        </a>
                        <div className="flex items-center text-red-500 font-bold text-xs">
                            <FiUsers className="w-3 h-3 mr-1" />
                            XXX ONLINE
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* แสดงจำนวน Online */}
                        <div className="flex items-center text-red-500 font-bold text-xs">
                            <FiUsers className="w-3 h-3 mr-1" />
                            XXX
                        </div>

                        {/* Hamburger Button */}
                        <button
                            className="hover:bg-gray-600 p-2 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Open menu"
                        >
                            <FiMenu className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute top-20 left-0 w-full bg-gray-800 z-50 flex flex-col items-center py-4 md:hidden animate-fade-in">
                            <Link
                                href="/"
                                className={`py-2 px-4 w-full text-center hover:bg-gray-700 transition-colors font-medium ${pathname === "/" ? "text-blue-300" : "text-gray-300"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                HOME
                            </Link>
                            {/* {session && (
                                <Link
                                    href="/playerdash"
                                    className={`py-2 px-4 w-full text-center hover:bg-gray-700 transition-colors font-medium ${pathname === "/playerdash" ? "text-blue-300" : "text-gray-300"}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    PLAYER DASHBOARD
                                </Link>
                            )} */}
                            <Link
                                href="/#contact"
                                className="py-2 px-4 w-full text-center text-gray-300 hover:bg-gray-700 transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                CONTACT US
                            </Link>
                        </div>
                    )}

                    {/* Login/Profile Section & Profile Dropdown */}
                    <div className="flex items-center space-x-4 relative" ref={rootRef}>

                        {status === "loading" ? (
                            <div className="bg-gray-700 px-6 py-2 rounded-lg">
                                Loading...
                            </div>
                        ) : session ? (
                            <div className="flex items-center space-x-3 relative">
                                <div
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => setOpen((prev: boolean) => !prev)}
                                    tabIndex={0}
                                >
                                    {session.user?.image && (
                                        <img
                                            src={session.user.image}
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                    <span className="text-sm font-medium">
                                        {session.user?.name}
                                    </span>
                                </div>

                                {/* Dropdown */}
                                {open && (
                                    <div className="absolute right-0 top-12 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                                        <div className="px-4 py-3 border-b">
                                            <div className="font-semibold">{session.user?.name}</div>
                                        </div>
                                        <Link href="report">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors font-medium text-sm"
                                            >
                                                Report
                                            </button>
                                        </Link>
                                        <Link href="#">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors font-medium text-sm"
                                            >
                                                Admin Dashboard
                                            </button>
                                        </Link>
                                        <Link href="playerdash">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors font-medium text-sm"
                                            >
                                                Player Dashboard
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => signOut()}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors font-medium text-sm"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => signIn("discord")}
                                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors font-medium flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                                <span>Login with Discord</span>
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}