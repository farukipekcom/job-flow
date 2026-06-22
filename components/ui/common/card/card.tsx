import { columns, Payment } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import CardHeader from "./card-header";
type CardProps = {
  title?: string;
  subTitle?: string;
  data: Payment[];
  error?: string;
};

export default async function Card({
  title,
  subTitle,
  data,
  error,
}: CardProps) {
  const headerProps = { title, subTitle };
  return (
    <section className="relative flex flex-col overflow-hidden rounded-lg border border-[#ded7ca]">
      <CardHeader {...headerProps} />
      <div className="bg-[#F7F2EA] p-4">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
