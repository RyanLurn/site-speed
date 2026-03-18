import { z } from "zod";

/**
 * The metric savings of the audit.
 */
export const MetricSavingsSchema = z.object({
  TBT: z.number().optional(),
  LCP: z.number().optional(),
  FCP: z.number().optional(),
  CLS: z.number().optional(),
  INP: z.number().optional(),
});
