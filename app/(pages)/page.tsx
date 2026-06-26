import Metrics from "@/components/Metrics/Metrics";

import { CalendarDays, Mail, Sparkles, TrendingUp } from "lucide-react";
import { getUniqueLocations, getUniqueValues } from "@/lib/jobs/get-locations";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Pipeline from "@/components/Pipeline/Pipeline";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("jobs").select();
  const locations = getUniqueLocations(data ?? []);
  const statuses = getUniqueValues(data ?? [], "stage");
  const types = getUniqueValues(data ?? [], "work_type");
  const totalApplications =
    data?.filter((job) => job.stage !== "Withdrawn").length ?? 0;
  const interviews =
    data?.filter((job) => job.stage === "Interview").length ?? 0;
  const offers = data?.filter((job) => job.stage === "Offer").length ?? 0;
  const interviewRate = totalApplications
    ? Math.round((interviews / totalApplications) * 100)
    : 0;

  return (
    <>
      <h1 className="text-secondary text-2xl font-bold">Dashboard</h1>
      <div className="flex justify-between gap-x-4">
        <Metrics
          title="Total applications"
          value={totalApplications.toString()}
          icon={<TrendingUp size={16} />}
          desc="active in your pipeline"
        />
        <Metrics
          title="Interviews"
          value={interviews.toString()}
          icon={<Sparkles size={16} />}
          desc="interviews scheduled"
        />
        <Metrics
          title="Offers received"
          value={offers.toString()}
          desc="offers received"
          icon={<Mail size={16} />}
        />
        <Metrics
          title="Interview rate"
          value={interviewRate.toString() + "%"}
          desc="of total applications"
          icon={<CalendarDays size={16} />}
        />
      </div>
      <Pipeline
        data={data ?? []}
        locations={locations}
        statuses={statuses}
        types={types}
        error={error?.message}
        title="Job pipeline"
        subTitle="View all jobs"
      />
    </>
  );
}
