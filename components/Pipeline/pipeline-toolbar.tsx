"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { SearchIcon } from "lucide-react";
import { PipelineFilterCombobox } from "./pipeline-filter-combobox";

type PipelineToolbarProps = {
  companySearch: string;
  onCompanySearchChange: (value: string) => void;
  locations: string[];
  locationFilter: string[];
  onLocationFilterChange: (value: string[]) => void;
  statuses: string[];
  statusFilter: string[];
  onStatusFilterChange: (value: string[]) => void;
  types: string[];
  typeFilter: string[];
  onTypeFilterChange: (value: string[]) => void;
};

export function PipelineToolbar({
  companySearch,
  onCompanySearchChange,
  locations,
  locationFilter,
  onLocationFilterChange,
  statuses,
  statusFilter,
  onStatusFilterChange,
  types,
  typeFilter,
  onTypeFilterChange,
}: PipelineToolbarProps) {
  return (
    <div className="mb-4 flex justify-between gap-2">
      <div className="flex w-full items-center gap-4">
        <div className="flex flex-1/4 items-center gap-4">
          <InputGroup className="rounded-lg bg-[#F7F6F9]">
            <InputGroupInput
              id="inline-start-input"
              placeholder="Search company, role, or location..."
              value={companySearch}
              className="placeholder:text-sm placeholder:text-[#888]"
              onChange={(event) => onCompanySearchChange(event.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex flex-2/3 items-center gap-4">
          <PipelineFilterCombobox
            items={locations}
            placeholder="Location"
            value={locationFilter}
            onValueChange={onLocationFilterChange}
            selectedLabel={(count) => `${count} locations selected`}
          />
          <PipelineFilterCombobox
            items={statuses}
            placeholder="Status"
            value={statusFilter}
            onValueChange={onStatusFilterChange}
            selectedLabel={(count) => `${count} status selected`}
          />
          <PipelineFilterCombobox
            items={types}
            placeholder="Type"
            value={typeFilter}
            onValueChange={onTypeFilterChange}
            selectedLabel={(count) => `${count} type selected`}
          />
        </div>
      </div>
    </div>
  );
}
