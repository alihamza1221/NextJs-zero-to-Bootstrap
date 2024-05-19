"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="m-2 bg-black text-white rounded-sm cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out px-4 py-2"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
