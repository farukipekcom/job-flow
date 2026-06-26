import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavItem({
  icon,
  label,
  isActive,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-full cursor-pointer items-center gap-2 rounded-lg bg-transparent p-3 text-sm font-medium hover:bg-[#EEF2FB]",
        isActive
          ? "text-primary bg-[#E8EDF8] font-semibold hover:bg-[#E8EDF8]"
          : "text-secondary",
      )}
    >
      {isActive && (
        <div className="bg-primary absolute left-[-12px] h-8 w-1 rounded-full"></div>
      )}
      <div className={cn(isActive && "text-primary")}>{icon}</div>
      <span>{label}</span>
    </div>
  );
}
