import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        cpf: { label: "cpf", type: "text" },
        senha: { label: "senha", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            cpf: credentials?.cpf,
            senha: credentials?.senha,
          }),
        });

        const user = await response.json();
        
        if (user && response.ok) {         
          return user;
        }
                
        return null;
      },
    }),
  ],
  pages: {    
    signIn: "/app/auth/login",
    signOut: "app/auth/logout",
  },
  callbacks: {  
    async jwt({ token, user }) {
			user && (token.user = user)
			return token
		},
    async session({ session, token }){
			session = token as any
			return session
		}
  },  
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };

