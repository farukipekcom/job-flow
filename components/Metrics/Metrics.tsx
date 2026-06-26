export default function Metrics({
  title,
  value,
  desc,
}: {
  title: string;
  value: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <section className="customShadow flex w-full flex-col justify-between rounded-lg border bg-[#E5EBFB] p-4">
      <div className="text-secondary text-sm font-medium">{title}</div>
      <div className="text-secondary mt-4 text-4xl font-semibold">{value}</div>
      <div className="text-secondary mt-2 text-xs font-medium">{desc}</div>
    </section>
  );
}
