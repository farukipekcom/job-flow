// app/login/login-form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  async function handleSignUp() {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setError("Check your email to confirm your account.");
    setLoading(false);
  }

  return (
    <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-y-4">
      <Field>
        <FieldLabel htmlFor="input-field-email">Email Address</FieldLabel>
        <Input
          id="input-field-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-color inputBorderColor h-10 border bg-white text-sm font-medium"
        />
      </Field>
      <Field>
        <FieldLabel
          htmlFor="input-field-password"
          className="flex justify-between"
        >
          Password
          <Link href="/forgot-password" className="text-[#C85832]">
            Forgot password?
          </Link>
        </FieldLabel>
        <Input
          id="input-field-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-color inputBorderColor h-10 border bg-white text-sm font-medium"
        />
      </Field>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={loading} className="h-10 cursor-pointer">
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      <div className="text-sm font-medium text-[#5F5951]">
        New to Job Flow?
        <Button
          type="button"
          variant="ghost"
          disabled={loading}
          onClick={handleSignUp}
          className="text-[#C85832]"
        >
          Create an account
        </Button>
      </div>
    </form>
  );
}
