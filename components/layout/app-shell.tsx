import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import { getUser } from "@/lib/supabase/get-user";
import { PageContent } from "./page-content";

export async function AppShell({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  return (
    <>
      <Navbar user={user} />
      <div className="ml-72">
        <Topbar />
        <PageContent>{children}</PageContent>
      </div>
    </>
  );
}
