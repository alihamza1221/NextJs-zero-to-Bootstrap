import { NextResponse, NextRequest } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export async function middleware(req, res) {
  const token = await getToken({ req, secret: process.env.SECRET });
  const url = req.nextUrl;
  if (
    token &&
    (url.pathname.startsWith("/login") || url.pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

const config = {
  matcher: [
    "/dashboard",
    "/home",
    "/",
    "/signup",
    "verify/:path*, 'signin",
    "login",
  ],
};
