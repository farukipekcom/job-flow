import { BriefcaseBusiness } from "lucide-react";

export default function CardHeader({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) {
  return (
    <div className="card-header">
      <div className="flex flex-col">
        <h2 className="card-title">{title}</h2>
        <span className="card-subtitle">{subTitle}</span>
      </div>
      <div>
        <BriefcaseBusiness />
      </div>
    </div>
  );
}
