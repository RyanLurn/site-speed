import { z } from "zod";

export const LighthouseCategorySchema = z
  .enum(["ACCESSIBILITY", "BEST_PRACTICES", "PERFORMANCE", "SEO"])
  .default("PERFORMANCE");

export const AnalysisStrategySchema = z
  .enum(["DESKTOP", "MOBILE"])
  .default("DESKTOP");

export const PageSpeedAPIQueryParamsSchema = z.object({
  utm_campaign: z.string().optional(),
  captchaToken: z.string().optional(),
  category: LighthouseCategorySchema,
  utm_source: z.string().optional(),
  locale: z.string().default("en"),
  strategy: AnalysisStrategySchema,
  url: z.url(),
});

export type PageSpeedAPIQueryParams = z.infer<
  typeof PageSpeedAPIQueryParamsSchema
>;
