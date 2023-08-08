"use client";
import { useSession } from "next-auth/react";
import Layout from "./components/Layout";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  console.log({ session });
  return (
    <>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello {session?.user.name}</h2>
        <div className="flex bg-gray-200 gap-1 text-black rounded-lg overflow ">
          <img src={session?.user?.image} className="w-8 h-8" alt=""></img>
          <span className=" px-2">{session.user?.name}</span>
        </div>
      </div>
    </>
  );
}
