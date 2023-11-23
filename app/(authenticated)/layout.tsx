import TopBarMenu from '@/components/layout/topBarMenu';
import SideBar from '@/components/layout/sideBar';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import React from 'react';
import { Conta } from '@prisma/client';
import { getConta } from '@/services/conta.service';
import { ContaProvider } from '@/components/contaProvider';

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
          <div className='bg-red-500 w-48'>
            <SideBar/>
          </div>
          <div className='w-screen'>
            <div className='bg-green-500 '> 
              <TopBarMenu />
            </div>
            <div className='flex bg-menu h-full w-full'>
              {children}
            </div>
          </div>
        </div>
      </ContaProvider> 
    </NextAuthSessionProvider>
    </>  
  );

}