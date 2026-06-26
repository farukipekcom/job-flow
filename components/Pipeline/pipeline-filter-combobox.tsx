"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

type PipelineFilterComboboxProps = {
  items: readonly string[];
  placeholder: string;
  value: string[];
  onValueChange: (value: string[]) => void;
  autoHighlight?: boolean;
  showChips?: boolean;
  selectedLabel?: (count: number) => string;
  className?: string;
};

export function PipelineFilterCombobox({
  items,
  placeholder,
  value,
  onValueChange,
  autoHighlight = false,
  showChips = false,
  selectedLabel = (count) => `${count} selected`,
  className,
}: PipelineFilterComboboxProps) {
  const anchor = useComboboxAnchor();

  return (
    <Combobox
      multiple
      autoHighlight={autoHighlight}
      items={items}
      value={value}
      onValueChange={onValueChange}
    >
      <ComboboxChips ref={anchor} className={cn("bg-accent w-1/4", className)}>
        <ComboboxValue>
          {(values) => (
            <>
              <ComboboxChipsInput
                className={cn(
                  "text-sm font-medium",
                  values.length === 0 ? "" : "placeholder:text-secondary",
                )}
                placeholder={
                  values.length === 0
                    ? placeholder
                    : selectedLabel(values.length)
                }
              />
              {values.length > 0 && (
                <button type="button" onClick={() => onValueChange([])}>
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
