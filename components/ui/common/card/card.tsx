import { columns, Payment } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import CardHeader from "./card-header";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      company: "Company 1",
      jobTitle: "Job Title 1",
      location: "Location 1",
      salaryRange: "100,000 - 120,000",
      interviewDate: "2026-01-01",
      stage: "Applied",
    },
    {
      id: "2",
      company: "Company 2",
      jobTitle: "Job Title 2",
      location: "Location 2",
      salaryRange: "100,000 - 120,000",
      interviewDate: "2026-01-01",
      stage: "Shortlisted",
    },
    {
      id: "3",
      company: "Company 3",
      jobTitle: "Job Title 3",
      location: "Location 3",
      salaryRange: "100,000 - 120,000",
      interviewDate: "2026-01-01",
      stage: "Applied",
    },
    {
      id: "4",
      company: "Company 4",
      jobTitle: "Job Title 4",
      location: "Location 4",
      salaryRange: "100,000 - 120,000",
      interviewDate: "2026-01-01",
      stage: "Applied",
    },
    {
      id: "5",
      company: "Company 5",
      jobTitle: "Job Title 5",
      location: "Location 5",
      salaryRange: "100,000 - 120,000",
      interviewDate: "2026-01-01",
      stage: "Applied",
    },
  ];
}
export default async function Card({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) {
  const data = await getData();
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
