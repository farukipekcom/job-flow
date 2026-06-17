import {Filter, Plus, Search} from "lucide-react";
import {Button} from "../ui/button";
import {InputGroup, InputGroupAddon, InputGroupInput} from "../ui/input-group";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="ml-72 p-4 h-16 flex items-center justify-between gap-x-3 border-b borderColor">
      <InputGroup className="bg-white text-color text-sm font-medium border inputBorderColor">
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
        <InputGroupInput id="input-group-url" className="" placeholder="Search jobs, contacts, notes..." />
      </InputGroup>
      <Button variant={"outline"} className="inputBorderColor cursor-pointer text-sm font-medium">
        <Filter />
        Filters
      </Button>
      <Button asChild variant="default" className="inputBorderColor hover:bg-[#333]">
        <Link href="/jobs/new">
          <Plus />
          Add Job
        </Link>
      </Button>
    </div>
  );
}
