import { z } from "zod";

export const customerTypes = [
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
];

const phoneRegex = /^[0-9]{10}$/;

export const customerSchema = z.object({
  id: z.string(),
  customerType: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().refine((val) => phoneRegex.test(val)),
  district: z.string(),
  province: z.string(),
  address: z.string(),
  representative: z.string(),
  manager: z.string(),
  referrer: z.string().optional(),
});

export type Customer = z.infer<typeof customerSchema>;
