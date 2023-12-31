'use client';

import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function LogoutHome() {
  const router = useRouter()

  async function logout() {
    await signOut({
      redirect: false
    })

    router.replace('/login');
  }


  return (
    <>
      <button onClick={logout} className="p-2 w-40 border border-gray-300 rounded-md mt-3">Sair</button>
    </>
  )
}