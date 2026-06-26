import { Bell, Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
export default function Topbar() {
  return (
    <div className="flex items-center p-6">
      <div className="flex w-full items-center justify-around gap-x-4 rounded-full">
        <div className="text-secondary flex flex-1 flex-col gap-y-1 text-sm font-medium">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              {/*<BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* <InputGroup className="inputBorderColor rounded-full border bg-white text-sm font-medium">
          <InputGroupAddon align="inline-start">
            <Search className="text-secondary" />
          </InputGroupAddon>
          <InputGroupInput
            id="input-group-url"
            className="placeholder:text-[#8F9BBA]"
            placeholder="Search"
          />
        </InputGroup> */}
        <Bell size={24} className="cursor-pointer text-[#8F9BBA]" />
        <Image
          src="/faruk.png"
          className="cursor-pointer"
          alt="Job Flow"
          width={36}
          height={36}
        />
        <div className="h-8 w-[2px] bg-[#dadada]"></div>
        <Button className="bg-primary h-10 cursor-pointer rounded-lg px-3 text-sm font-medium text-white">
          <Plus strokeWidth={2} />
          Add Job
        </Button>
      </div>
    </div>
  );
}
