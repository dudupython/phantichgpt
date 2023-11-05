import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

//TA add them de generate
import { NextResponse } from "next/server";


// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
    router: ourFileRouter,
});