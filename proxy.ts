import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const response = createMiddleware(routing)(request);

  if (response.redirected) {
    return response;
  }

  const { pathname, search } = request.nextUrl;

  const [, locale, regionCode, ...others] = pathname.split("/");

  switch (regionCode?.toUpperCase()) {
    case "HK":
    case "US":
      return response;
  }

  return NextResponse.redirect(
    new URL(
      `/${locale}/HK${others?.length ? `/${others?.join("/")}` : ""}${search}`,
      request.url
    )
  );
}

// export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
