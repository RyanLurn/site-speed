/* eslint-disable perfectionist/sort-objects */

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
export type MetricSavings = z.infer<typeof MetricSavingsSchema>;

/**
 * An audit's result object in a Lighthouse result.
 */
export const LighthouseAuditResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  scoreDisplayMode: z.string(),
  displayValue: z.string(),
  explanation: z.string().optional(),
  metricSavings: MetricSavingsSchema,
});
export type LighthouseAuditResult = z.infer<typeof LighthouseAuditResultSchema>;
