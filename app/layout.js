import { NextAuthProvider } from "./NextAuthProvider";
import Layout from "./components/Layout";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <NextAuthProvider session={session}>
          <Layout>{children}</Layout>
        </NextAuthProvider>
        ;
      </body>
    </html>
  );
}
