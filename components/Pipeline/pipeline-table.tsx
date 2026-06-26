"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Job } from "./types";
import { cn } from "@/lib/utils";
import { EllipsisVertical, EllipsisVerticalIcon } from "lucide-react";
import { PipelineToolbar } from "@/components/Pipeline/pipeline-toolbar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const PAGE_SIZE = 5;

const rowClass =
  "grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_32px] items-center gap-x-4 border-b border-[#ded7ca] px-4 py-4 hover:bg-[#f8fafc] text-[13px] font-medium text-secondary transition-colors duration-200";

type PipelineTableProps = {
  data: Job[];
  locations: string[];
  statuses: string[];
  types: string[];
};
type Stage = {
  name: string;
  color: string;
};
const stagesColors: Stage[] = [
  { name: "Applied", color: "bg-green-100 text-green-600" },
  { name: "Offer", color: "bg-blue-100 text-blue-600" },
  { name: "Interview", color: "bg-purple-100 text-purple-600" },
  { name: "Withdrawn", color: "bg-yellow-100 text-yellow-600" },
  { name: "Rejected", color: "bg-red-100 text-red-600" },
];
console.log(stagesColors.find((stage) => stage.name === "Applied")?.color);
export function PipelineTable({
  data,
  locations,
  statuses,
  types,
}: PipelineTableProps) {
  const [companySearch, setCompanySearch] = useState("");
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [hoveredJobId, setHoveredJobId] = useState<string | null>(null);

  const filteredData = data.filter((job) => {
    const search = companySearch.toLowerCase().trim();
    const matchesSearch =
      !search ||
      job.company.toLowerCase().includes(search) ||
      job.role.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search);
    const matchesLocation =
      locationFilter.length === 0 || locationFilter.includes(job.location);
    const matchesStatus =
      statusFilter.length === 0 || statusFilter.includes(job.stage);
    const matchesType =
      typeFilter.length === 0 || typeFilter.includes(job.work_type);

    return matchesSearch && matchesLocation && matchesStatus && matchesType;
  });
  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const paginatedData = filteredData.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE,
  );

  const handleFilterChange = (setter: (value: string[]) => void) => {
    return (value: string[]) => {
      setter(value);
      setPage(0);
    };
  };

  return (
    <>
      <PipelineToolbar
        companySearch={companySearch}
        onCompanySearchChange={(value) => {
          setCompanySearch(value);
          setPage(0);
        }}
        locations={locations}
        locationFilter={locationFilter}
        onLocationFilterChange={handleFilterChange(setLocationFilter)}
        statuses={statuses}
        statusFilter={statusFilter}
        onStatusFilterChange={handleFilterChange(setStatusFilter)}
        types={types}
        typeFilter={typeFilter}
        onTypeFilterChange={handleFilterChange(setTypeFilter)}
      />

      <div className="relative flex flex-col overflow-hidden rounded-lg border border-[#ded7ca]">
        <div
          className={cn(
            rowClass,
            "bg-[#F7F6F9] text-xs font-semibold text-[#64748B]",
          )}
        >
          <div>Company / Role</div>
          <div>Location</div>
          <div>Salary</div>
          <div>Status</div>
          <div>Applied On</div>
          <div>Next Step</div>
        </div>
        {paginatedData.length === 0 ? (
          <div className="text-muted-foreground px-4 py-8 text-center text-sm">
            No jobs found for this filter.
          </div>
        ) : (
          paginatedData.map((job) => {
            return (
              <Link
                href={`/jobs/${job.company.toLowerCase().replace(/ /g, "-")}`}
                key={job.id}
                className={rowClass}
                onMouseEnter={() => setHoveredJobId(job.id)}
                onMouseLeave={() => setHoveredJobId(null)}
              >
                <div className="flex w-full items-center gap-x-2">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-md text-lg font-bold transition-colors duration-200"
                    style={{
                      backgroundColor:
                        hoveredJobId === job.id
                          ? `${job.color}30`
                          : `${job.color}10`,
                      borderColor: job.color,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      color: job.color,
                    }}
                  >
                    {job.company.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                    <div className="text-secondary text-sm font-semibold">
                      {job.company}
                    </div>
                    <div className="text-xs text-slate-500">{job.role}</div>
                  </div>
                </div>
                <div className="">
                  {job.location} <br />
                  {job.work_type}
                </div>
                <div className="">{job.salary_range}</div>
                <div
                  className={cn(
                    "w-min rounded-md px-2 py-1",
                    stagesColors.find((stage) => stage.name === job.stage)
                      ?.color,
                  )}
                >
                  {job.stage}
                </div>
                <div className="">{job.interview_date}</div>

                <div className="flex flex-col gap-y-0.5">
                  <div className="text-secondary text-sm font-medium">
                    {job.next_step_details}
                  </div>
                  <div className="text-xs text-slate-500">
                    {job.next_step_date}
                  </div>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-muted-foreground data-[state=open]:bg-muted flex size-8"
                        size="icon"
                      >
                        <EllipsisVertical />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Make a copy</DropdownMenuItem>
                      <DropdownMenuItem>Favorite</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Link>
            );
          })
        )}
        {filteredData.length > PAGE_SIZE && (
          <div className="flex items-center justify-end gap-2 px-4 py-3">
            <span className="text-muted-foreground mr-auto text-sm">
              {page * PAGE_SIZE + 1}–
              {Math.min((page + 1) * PAGE_SIZE, filteredData.length)} of{" "}
              {filteredData.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
              className="inputBorderColor cursor-pointer"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => p + 1)}
              disabled={page >= totalPages - 1}
              className="inputBorderColor cursor-pointer"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
