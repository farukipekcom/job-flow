export function PageContent({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-y-4 px-6">{children}</div>;
}
