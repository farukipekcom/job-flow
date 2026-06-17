export default function Metrics({
  title,
  value,
  delta,
  icon,
}: {
  title: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
}) {
  return (
    <section className="cardBorderColor transition-ring flex w-full cursor-pointer flex-col justify-between gap-y-1 rounded-lg border bg-white p-4 duration-300 hover:border-[#777063] hover:ring-2 hover:ring-gray-200">
      <div className="flex w-full justify-between">
        <span className="headingColor text-sm font-semibold">{title}</span>
        <span>{icon}</span>
      </div>
      <span className="textColor mt-2 text-2xl font-bold">{value}</span>
      <span className="subHeadingColor text-xs font-medium">{delta}</span>
    </section>
  );
}
