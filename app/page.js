"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session, " sess");
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID, "env");
  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            onClick={() => signIn()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login With
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
      logged in {session.user.email}
    </div>
  );
}
