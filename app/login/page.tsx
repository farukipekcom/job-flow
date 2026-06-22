import Link from "next/link";
import LoginForm from "./login-form";
import { CircleCheck, Sparkle } from "lucide-react";
export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      <div className="hidden h-auto min-h-screen w-5/12 flex-col justify-between bg-[#1D211D] px-20 py-12 lg:flex">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white">
            <div className="h-5 w-5 rounded-xs bg-blue-950"></div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-sm font-bold text-white">Job Flow</h1>
            <span className="text-xs text-white">AI Job Tracker</span>
          </div>
        </Link>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-2 text-[#E67B55]">
            <Sparkle size={16} />
            <span className="text-xs font-semibold">
              YOUR SEARCH, FINALLY ORGANIZED
            </span>
          </div>
          <div className="text-5xl leading-16 font-semibold text-white">
            Keep every opportunity moving forward.
          </div>
          <div className="text-[#C8C3B9]">
            Track applications, prepare for interviews, and follow up at the
            right moment from one focused workspace.
          </div>
        </div>
        <div className="flex items-center gap-x-2 border-t border-t-gray-500 pt-5 text-sm text-white">
          <CircleCheck className="text-green-500" size={16} /> Built for a
          calmer, more intentional job search.
        </div>
      </div>
      <div className="mx-auto flex h-auto min-h-screen w-180 max-w-120 flex-col justify-center gap-y-4 px-8 py-12 lg:max-w-full lg:px-24">
        <div className="flex flex-col gap-y-2">
          <div className="text-sm font-semibold text-[#C85832]">
            Welcome back
          </div>
          <div className="text-4xl font-semibold">Sign in to Job Flow</div>
          <div className="text-sm font-medium text-[#5F5951]">
            Pick up where you left off and keep your opportunities moving.
          </div>
        </div>
        <LoginForm />
      </div>

      <Link
        href="/"
        className="absolute top-0 right-0 mx-4 my-4 text-sm font-medium text-[#6C655C]"
      >
        Back to Dashboard
      </Link>
    </main>
  );
}
{
  /*  */
}
