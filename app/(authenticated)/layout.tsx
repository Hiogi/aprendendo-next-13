import SideBar from '@/components/layout/sideBar';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import DashboardMenu from '@/components/layout/dashboardMenu';

export default async function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const sessao = await getServerSession(nextAuthOptions);
  
  if (!sessao) {
    redirect('/login');
  }

  return (
    <>
    <NextAuthSessionProvider>

      <div className='flex h-screen w-screen'>
        <div className='bg-red-500 w-48'>
          <SideBar/>
        </div>
        <div className='w-screen'>
          <div className='bg-green-500 '> 
            <DashboardMenu/>
          </div>
          <div className='flex justify-center items-center bg-yellow-500 h-screen '>
            {children}
          </div>
        </div>
      </div>

      {/* <div className="flex bg-white ">
        <DashboardMenu/>
        <div className="w-1/6  ">
          <SideBar  />
        </div>
        

        <div className="w-screen ">{children}</div>
      </div> */}
    </NextAuthSessionProvider>
    </>  
  );

}