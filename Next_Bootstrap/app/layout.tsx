import { nextAuthOptions } from "./api/auth/[...nextauth]/nextAuth-Options";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { getServerSession } from "next-auth/next";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import ToastProvider from "@/components/ui/ToastProvider";

export const metadata: Metadata = {
  title: "Next.js 0 to Bootstrap",
  description:
    "Learn Next.js and Bootstrap your own Sass Projects Let's build our own ideas.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);
  return (
    <html lang="en">
      <AuthProvider session={session}>
        <body className={` ${inter.className}`}>{children}</body>
      </AuthProvider>{" "}
      <ToastProvider />
    </html>
  );
}
