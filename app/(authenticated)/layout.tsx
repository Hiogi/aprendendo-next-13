export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`bg-green-800 h-screen`}>{children}</div>;
}
