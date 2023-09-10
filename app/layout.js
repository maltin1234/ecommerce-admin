import { NextAuthProvider } from "./NextAuthProvider";
import Layout from "./components/Layout";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth/next";

export default async function RootLayout({ session, children }) {
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
