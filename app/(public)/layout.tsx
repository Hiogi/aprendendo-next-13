import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    redirect('/');
  }
  return <>{children}</>

}