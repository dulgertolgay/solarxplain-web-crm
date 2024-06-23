"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";

interface SiteVisitDetailMainFormProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SiteVisitDetailMainForm = ({
  className,
}: SiteVisitDetailMainFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    number_of_roofs: 1,
    employee: "",
    employee_email: "",
    employee_phone: "",
    site_visit_date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Card className={cn("grid auto-rows-max items-stretch", className)}>
      <CardHeader>
        <CardTitle>{t("site_visit_details.main_form.title")}</CardTitle>
        <CardDescription>
          {t("site_visit_details.main_form.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="number_of_roofs">
              {t("site_visit_details.main_form.number_of_roofs.label")}
            </Label>
            <Input
              id="number_of_roofs"
              type="number"
              placeholder={t(
                "site_visit_details.main_form.number_of_roofs.placeholder"
              )}
              value={formData.number_of_roofs}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="employee">
              {t("site_visit_details.main_form.employee_in_charge.label")}
            </Label>
            <Combobox
              id="employee_in_charge"
              aria-label={t(
                "site_visit_details.main_form.employee_in_charge.placeholder"
              )}
              placeholder={t(
                "site_visit_details.main_form.employee_in_charge.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.main_form.employee_in_charge.searchPlaceholder"
              )}
              options={[{ value: "facility_1", label: "Facility 1" }]}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="grid gap-3">
              <Label htmlFor="employee_email">
                {t("site_visit_details.main_form.employee_email.label")}
              </Label>
              <Input
                id="employee_email"
                type="text"
                placeholder={t(
                  "site_visit_details.main_form.employee_email.placeholder"
                )}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="employee_phone">
                {t("site_visit_details.main_form.employee_phone.label")}
              </Label>
              <Input
                id="employee_phone"
                type="text"
                placeholder={t(
                  "site_visit_details.main_form.employee_phone.placeholder"
                )}
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="site_visit_date">
              {t("site_visit_details.main_form.site_visit_date.label")}
            </Label>
            <DatePicker
              id="site_visit_date"
              type="text"
              placeholder={t(
                "site_visit_details.main_form.site_visit_date.placeholder"
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiteVisitDetailMainForm;
