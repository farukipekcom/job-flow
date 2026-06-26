import { PipelineTable } from "./pipeline-table";
import type { PipelineProps } from "./types";

export default function Pipeline({
  title,
  subTitle,
  data,
  locations,
  statuses,
  types,
}: PipelineProps) {
  return (
    <section className="">
      {/* <CardHeader title={title} subTitle={subTitle} /> */}
      <PipelineTable
        data={data}
        locations={locations}
        statuses={statuses}
        types={types}
      />
    </section>
  );
}
