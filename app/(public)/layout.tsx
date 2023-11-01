export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (  
      <div className={`bg-red-800 h-screen`}>
        {children}
      </div>
 
  );
}
