import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      cpf: string;
      senha: string;
      name: string
    }

  } 
}