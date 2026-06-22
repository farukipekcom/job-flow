"use client";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarAuth from "./NavbarAuth";
const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={16} />,
  },
  {
    label: "Applications",
    href: "/applications",
    icon: <BriefcaseBusiness size={16} />,
  },
  {
    label: "AI Matching",
    href: "/ai-matching",
    icon: <Sparkles size={16} />,
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: <CalendarDays size={16} />,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: <FileText size={16} />,
  },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="borderColor fixed flex h-screen w-72 border-r border-gray-200 p-6">
      <div className="wrapper flex min-h-0 flex-1 flex-col">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-black">
            <div className="h-5 w-5 rounded-xs bg-gray-100"></div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-sm font-bold text-black">Job Flow</h1>
            <span className="text-xs text-gray-500">AI Job Tracker</span>
          </div>
        </Link>
        <nav className="mt-8 flex-1">
          <ul className="flex flex-col gap-y-1">
            {navItems.map(({ label, href, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  href={href}
                  key={href}
                  className={cn(
                    "flex h-10 items-center gap-2 rounded-lg p-3 text-sm font-medium hover:bg-[#efe7dc]",
                    isActive
                      ? "bg-black text-white hover:bg-black"
                      : "textColor",
                  )}
                >
                  <div>{icon}</div>
                  <span>{label}</span>
                </Link>
              );
            })}
          </ul>
        </nav>
        <NavbarAuth />
      </div>
    </header>
  );
}
