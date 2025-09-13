"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

type SidebarWrapperProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SidebarWrapper({ open, setOpen }: SidebarWrapperProps) {
  const pathname = usePathname();
  const showSidebar =
    pathname.startsWith("/viewDash") ||
    pathname.startsWith("/gameMet") ||
    pathname.startsWith("/manageUser") ||
    pathname.startsWith("/manageRep");

  return showSidebar ? <Sidebar open={open} setOpen={setOpen} /> : null;
}
