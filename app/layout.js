import { NextAuthProvider } from "./NextAuthProvider";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>;
      </body>
    </html>
  );
}
