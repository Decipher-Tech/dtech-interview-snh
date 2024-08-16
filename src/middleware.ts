import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id", "fr", "bn"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(id|en|fr|bn)/:path*"],
};
