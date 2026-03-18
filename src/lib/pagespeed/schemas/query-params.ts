import { z } from "zod";

export const LighthouseCategory = z.enum([
  "CATEGORY_UNSPECIFIED",
  "ACCESSIBILITY",
  "BEST_PRACTICES",
  "PERFORMANCE",
  "SEO",
]);
