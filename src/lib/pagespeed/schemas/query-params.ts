import { z } from "zod";

export const LighthouseCategory = z
  .enum(["ACCESSIBILITY", "BEST_PRACTICES", "PERFORMANCE", "SEO"])
  .default("PERFORMANCE");
