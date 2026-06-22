import Metrics from "@/components/Metrics/Metrics";
import Card from "@/components/ui/common/card/card";
import { CalendarDays, Mail, Sparkles, TrendingUp } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("jobs").select();

  return (
    <div className="m-6 flex gap-6">
      <div className="ml-72 flex w-full flex-col gap-y-4">
        <div className="flex justify-between gap-x-4">
          <Metrics
            title="Active roles"
            value="38"
            delta="+7 weeks"
            icon={<TrendingUp size={16} />}
          />
          <Metrics
            title="AI match avg."
            value="91%"
            delta="+4 pts"
            icon={<Sparkles size={16} />}
          />
          <Metrics
            title="Reply rate"
            value="42%"
            delta="+11%"
            icon={<Mail size={16} />}
          />
          <Metrics
            title="Interview loops"
            value="10"
            delta="3 this week"
            icon={<CalendarDays size={16} />}
          />
        </div>
        <Card
          data={data ?? []}
          error={error?.message}
          title="Job pipeline"
          subTitle="View all jobs"
        />
      </div>
    </div>
  );
}
