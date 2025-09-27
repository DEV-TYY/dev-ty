import { exitPreview } from "@prismicio/next";

export const dynamic = "force-dynamic"; // Prevent static prerendering

export function GET() {
  return exitPreview();
}
