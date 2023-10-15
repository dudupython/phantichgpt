import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/generate", "/api/caption"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};