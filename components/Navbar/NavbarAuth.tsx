"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function NavbarAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="borderColor mt-auto border-t pt-4">
        <div className="bg-muted h-8 w-full animate-pulse rounded-lg" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="borderColor mt-auto border-t pt-4">
        <p className="textColor mb-3 truncate text-xs">{user.email}</p>
        <form action="/auth/signout" method="post">
          <Button type="submit" variant="outline" className="w-full">
            <LogOut size={16} />
            Sign out
          </Button>
        </form>
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
