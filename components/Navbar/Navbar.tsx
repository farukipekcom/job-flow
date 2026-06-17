"use client";
import {cn} from "@/lib/utils";
import {BriefcaseBusiness, CalendarDays, FileText, LayoutDashboard, Sparkles} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
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
    <header className="w-72 p-6 fixed h-screen border-r border-gray-200 borderColor">
      <div className="wrapper">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-black w-10 h-10 rounded-sm flex items-center justify-center">
            <div className="bg-gray-100 w-5 h-5 rounded-xs"></div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-sm font-bold text-black">Job Flow</h1>
            <span className="text-xs text-gray-500">AI Job Tracker</span>
          </div>
        </Link>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-1">
            {navItems.map(({label, href, icon}) => {
              const isActive = pathname === href;
              return (
                <Link
                  href={href}
                  key={href}
                  className={cn(
                    "flex items-center rounded-lg gap-2 text-sm h-10 hover:bg-[#efe7dc] p-3 font-medium ",
                    isActive ? "bg-black hover:bg-black text-white" : "textColor",
                  )}>
                  <div>{icon}</div>
                  <span>{label}</span>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
