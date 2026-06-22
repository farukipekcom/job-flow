// app/(dashboard)/layout.tsx
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Topbar />
      {children}
    </>
  );
}
