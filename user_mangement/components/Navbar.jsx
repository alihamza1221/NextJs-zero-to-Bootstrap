"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="fixed bg-black p-4">
        <div className="container mx-auto">
          <ul className="flex h-screen flex-col font-bold justify-between">
            <div className="top text-white">
              <li className="mx-4 mt-5 ">
                {" "}
                <Link href={"/"}>Home</Link>
              </li>
              <li className="mx-4 mt-5 ">
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
            </div>
            <div className="auth text-white">
              <li className="mx-4 mb-[2rem] ">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="mx-4 mb-5">
                <Link href={"/register"}>Register</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
