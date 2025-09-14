"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const hiddenPaths = ["/viewDash", "/gameMet", "/manageUser", "/manageRep"];
  if (hiddenPaths.includes(pathname)) return null;
  return (
    <div>
      <footer className="bg-gray-800 border-t border-gray-700 text-white text-center p-10">
        <p>&copy; 2024 Pixel Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
