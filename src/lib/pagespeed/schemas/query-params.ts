import { z } from "zod";

export const LighthouseCategorySchema = z
  .enum(["ACCESSIBILITY", "BEST_PRACTICES", "PERFORMANCE", "SEO"])
  .default("PERFORMANCE");

export const AnalysisStrategySchema = z
  .enum(["DESKTOP", "MOBILE"])
  .default("DESKTOP");
