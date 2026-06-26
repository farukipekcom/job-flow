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
import NavItem from "./NavItem";
import { User } from "@supabase/supabase-js";
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
export default function Navbar({ user }: { user: User | null }) {
  const pathname = usePathname();
  return (
    <header className="borderColor fixed flex h-screen w-72 border-r p-6">
      <div className="wrapper flex min-h-0 flex-1 flex-col">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <div className="h-5 w-5 rounded-sm bg-white"></div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-secondary text-xl font-extrabold">Job Flow</h1>
          </div>
        </Link>
        <nav className="mt-8 flex-1">
          <ul className="flex flex-col gap-y-1">
            {navItems.map(({ label, href, icon }) => {
              const isActive = pathname === href;
              return (
                <Link href={href} key={href}>
                  <NavItem
                    key={href}
                    icon={icon}
                    label={label}
                    isActive={isActive}
                  />
                </Link>
              );
            })}
          </ul>
        </nav>
        <NavbarAuth user={user} />
      </div>
    </header>
  );
}
