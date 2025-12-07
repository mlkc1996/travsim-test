import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const response = createMiddleware(routing)(request);

  console.log("proxy 1", request.nextUrl.toString());

  if (response.redirected) {
    console.log("proxy 2", "redirected");
    return response;
  }

  const { pathname, search } = request.nextUrl;

  const [, locale, regionCode, ...others] = pathname.split("/");
  console.log("proxy 3", `locale:${locale} regionCode:${regionCode}}`);

  switch (regionCode?.toUpperCase()) {
    case "HK":
    case "US":
      return response;
  }
  const newUrl = new URL(
    `/${locale}/HK${others?.length ? `/${others?.join("/")}` : ""}${search}`,
    request.nextUrl
  );

  console.log("proxy 4", newUrl.toString());

  return NextResponse.redirect(newUrl);
}

// export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
