"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children, session }) => {
  // Use the 'useClient' hook if required
  // const client = useClient();

  // Return the SessionProvider component wrapping the children
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
