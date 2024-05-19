import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const url = await req.nextUrl;
  if (
    (token && url.pathname.startsWith("/sign-in")) ||
    url.pathname.startsWith("/sign-up") ||
    url.pathname.startsWith("/verify")
  ) {
    NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (
    (!token && url.pathname.startsWith("/dashboard")) ||
    url.pathname.startsWith("/")
  ) {
    NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/sign-in", "/sign-up", "/verify/:path*"],
};
