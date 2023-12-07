import { ContaProvider } from '@/components/contaProvider';
import SideBar from '@/components/layout/sideBar';
import TopBarMenu from '@/components/layout/topBarMenu';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const sessao = await getServerSession(nextAuthOptions);
  
  if (!sessao) {
    redirect('/login');
  }

  return (
    <>
    <NextAuthSessionProvider>
      <ContaProvider>
        <div className='flex h-screen w-screen'>
          <div className='bg-red-500'>
            <SideBar/>
          </div>
          <div className='grow flex flex-col'>
            <div className='bg-green-500 '> 
              <TopBarMenu />
            </div>
            <div className='grow overflow-auto p-4'>
              {children}
            </div>
          </div>
        </div>
      </ContaProvider> 
    </NextAuthSessionProvider>
    </>  
  );

}