import SideBar from '@/components/layout/sideBar';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const sessao = await getServerSession(nextAuthOptions);
  
  if (!sessao) {
    redirect('/login');
  }

  return (
    <>
    <NextAuthSessionProvider>
      <div className="flex bg-white ">
        <div className="w-1/6 pr-4 ">
          <SideBar  />
        </div>

        <div className="w-1/3 px-4">{children}</div>
        {/* <div><MostraUsuario/></div> */}
      </div>
    </NextAuthSessionProvider>
    </>  
  );

}