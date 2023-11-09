import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      cpf: string;
      senha: string;
      name: string
    }
  } 
}