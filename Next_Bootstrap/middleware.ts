import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  console.log(
    "running middleware... token",
    token,
    "url ",
    req.nextUrl.pathname
  );
  const url = req.nextUrl;
  if (
    !!token &&
    (url.pathname.startsWith("/sign-in") ||
      url.pathname.startsWith("/sign-up") ||
      url.pathname.startsWith("/verify"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (
    !token &&
    (url.pathname.startsWith("/dashboard") || url.pathname == "/")
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/sign-in", "/sign-up", "/verify/:path*"],
};
