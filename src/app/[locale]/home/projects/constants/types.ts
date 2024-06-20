import { z } from "zod";

export const siteVisitStatuses: { [key: number]: string } = {
  0: "not-completed",
  1: "completed",
};

export const offerStatuses: { [key: number]: string } = {
  0: "preparing",
  1: "on-review",
  2: "sent",
};

export const projectStatuses: { [key: number]: string } = {
  0: "active",
  1: "inactive",
};

export const projectSchema = z.object({
  id: z.string(),
  project_no: z.number(),
  project_name: z.string(),
  district: z.string(),
  province: z.string(),
  dc_power: z.number(),
  ac_power: z.number(),
  site_visit_status: z.number(),
  offer_status: z.number(),
  project_status: z.number(),
});

export type Project = z.infer<typeof projectSchema>;
