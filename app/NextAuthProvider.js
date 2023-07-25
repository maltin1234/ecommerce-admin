"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  // Use the 'useClient' hook if required
  // const client = useClient();

  // Return the SessionProvider component wrapping the children
  return <SessionProvider>{children}</SessionProvider>;
};
