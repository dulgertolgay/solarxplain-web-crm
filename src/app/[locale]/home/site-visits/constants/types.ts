import { z } from "zod";

const phoneRegex = /^[0-9]{10}$/;

const employeeInformation = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex),
});

export const siteVisitSchema = z.object({
  id: z.string(),
  project_no: z.number(),
  project_name: z.string(),
  district: z.string(),
  province: z.string(),
  address: z.string(),
  employee_in_charge: employeeInformation,
  subcontractor: z.string(),
  site_visit_date: z.string().date(),
});

export type SiteVisit = z.infer<typeof siteVisitSchema>;
