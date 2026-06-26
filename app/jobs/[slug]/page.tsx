import { PageContent } from "@/components/layout/page-content";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Dot,
  FileText,
  MapPin,
  SquareCheckBig,
  TrendingUp,
  User,
  Activity,
  DollarSign,
  Clock4,
  Briefcase,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default async function JobDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  console.log(slug);
  const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !job) {
    notFound();
  }
  console.log("JOB", job);
  console.log("error", job);
  const card =
    "flex items-center gap-2 rounded-xl border border-[#ecebg0] bg-white p-4";
  const icon =
    "flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f0f0]";
  const title = "text-xs font-medium text-gray-500";
  const value = "text-sm font-semibold";
  return (
    <PageContent>
      <div className="flex w-240 flex-col overflow-hidden rounded-lg border border-[#ded7ca] bg-white">
        <div className="flex justify-between gap-2 px-4 py-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-2xl font-bold text-white"
            style={{ backgroundColor: job.color }}
          >
            {job.company.charAt(0)}
          </div>

          <div className="flex flex-1 flex-col">
            <h1 className="flex items-center gap-2 text-lg font-bold">
              {job.company}
              <div className="flex items-center gap-2">
                <div className="flex h-fit rounded-md bg-[#1a3580] py-1 pr-2 text-xs font-medium text-[#cee]">
                  <Dot size={16} strokeWidth={5} className="text-[#cee]" />
                  {job.stage}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                  <MapPin size={16} />
                  Remote
                </div>
              </div>
            </h1>
            <div className="mt-2 text-sm font-medium text-gray-700">
              Developer Relations Engineer
            </div>

            <ul className="mt-2 flex items-center gap-1 text-xs text-gray-600">
              <li className="rounded-full border border-gray-300 px-2 py-[2px]">
                Devrel
              </li>
              <li className="rounded-full border border-gray-300 px-2 py-[2px]">
                Javascript
              </li>
              <li className="rounded-full border border-gray-300 px-2 py-[2px]">
                Typescript
              </li>
            </ul>
          </div>
          <div>
            <Button
              variant="outline"
              className="cursor-pointer border border-gray-300 bg-white text-xs font-medium text-black"
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-1 rounded-xl border border-[#ECEBF0] bg-[#FAFAFA] p-1 text-sm">
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <TrendingUp size={16} />
          Overview
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <Calendar size={16} />
          Interviews
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <SquareCheckBig size={16} />
          Tasks
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <User />
          Contacts
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <FileText size={16} />
          Notes
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white px-3">
          <Activity size={16} />
          Activity
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className={cn(card)}>
          <div className={cn(icon)}>
            <DollarSign size={16} />
          </div>
          <div className="flex flex-col gap-y-0.5">
            <span className={cn(title)}>Salary Range</span>
            <span className={cn(value)}>{job.salary_range}</span>
          </div>
        </div>
        <div className={cn(card)}>
          <div className={cn(icon)}>
            <Clock4 size={16} />
          </div>
          <div className="flex flex-col gap-y-0.5">
            <span className={cn(title)}>Days Active</span>
            <span className={cn(value)}>{job.salary_range}</span>
          </div>
        </div>
        <div className={cn(card)}>
          <div className={cn(icon)}>
            <Briefcase size={16} />
          </div>
          <div className="flex flex-col gap-y-0.5">
            <span className={cn(title)}>Interview Rounds</span>
            <span className={cn(value)}>{job.salary_range}</span>
          </div>
        </div>
        <div className={cn(card)}>
          <div className={cn(icon)}>
            <Star size={16} />
          </div>
          <div className="flex flex-col gap-y-0.5">
            <span className={cn(title)}>Source</span>
            <span className={cn(value)}>{job.salary_range}</span>
          </div>
        </div>
      </div>
      {/* <h1>{job.company}</h1>
      <p>{job.role}</p>
      <p>{job.stage}</p>
      <p>{job.location}</p>
      <p>{job.salary_range}</p>
      <p>{job.interview_date}</p> */}
    </PageContent>
  );
}
