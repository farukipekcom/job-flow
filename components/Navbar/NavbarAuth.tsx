"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogIn, LogOut, Settings, UserPlus } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";

export default function NavbarAuth({ user }: { user: User | null }) {
  if (user) {
    return (
      <div className="borderColor mt-auto border-t pt-4">
        <NavItem icon={<Settings size={16} />} label="Settings" />
        <form
          action="/auth/signout"
          method="post"
          className="flex w-full cursor-pointer items-center gap-x-2 bg-transparent font-semibold"
        >
          <NavItem
            icon={<LogOut size={16} />}
            label={
              <Button
                variant={"ghost"}
                className="w-full cursor-pointer px-0 hover:bg-transparent"
              >
                Sign Out
              </Button>
            }
          />
        </form>
        <br />
      </div>
    );
  }

  return (
    <div className="borderColor mt-auto flex flex-col gap-2 border-t pt-4">
      <Button asChild className="w-full">
        <Link href="/login">
          <LogIn size={16} />
          Log in
        </Link>
      </Button>
      <Button asChild variant="outline" className="w-full">
        <Link href="/login">
          <UserPlus size={16} />
          Sign up
        </Link>
      </Button>
    </div>
  );
}
