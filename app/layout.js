import { NextAuthProvider } from "./NextAuthProvider";
import Layout from "./components/Layout";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
        ;
      </body>
    </html>
  );
}
