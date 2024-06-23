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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { InfoTooltip } from "@/components/common/info-tooltip";

interface ShadowFactorsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ShadowFactors = ({ className }: ShadowFactorsProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    inner_shadow_factor: "",
    inner_shadow_factor_notes: "",
    outer_shadow_factor: "",
    outer_shadow_factor_notes: "",
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
        <CardTitle>{t("site_visit_details.shadow_factors.title")}</CardTitle>
        <CardDescription>
          {t("site_visit_details.shadow_factors.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <div className="w-full flex items-center gap-2">
              <Label htmlFor="inner_shadow_factor">
                {t(
                  "site_visit_details.shadow_factors.inner_shadow_factor.label"
                )}
              </Label>
              <InfoTooltip
                content={t(
                  "site_visit_details.shadow_factors.inner_shadow_factor.info_text"
                )}
              />
            </div>
            <Combobox
              id="inner_shadow_factor"
              aria-label={t(
                "site_visit_details.shadow_factors.inner_shadow_factor.placeholder"
              )}
              placeholder={t(
                "site_visit_details.shadow_factors.inner_shadow_factor.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.shadow_factors.inner_shadow_factor.searchPlaceholder"
              )}
              options={[
                {
                  value: "inner_shadow_factor_1",
                  label: "Inner Shadow Factor 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="inner_shadow_factor_notes">
              {t(
                "site_visit_details.shadow_factors.inner_shadow_factor_notes.label"
              )}
            </Label>
            <Textarea
              id="inner_shadow_factor_notes"
              placeholder={t(
                "site_visit_details.shadow_factors.inner_shadow_factor_notes.label"
              )}
            />
          </div>
          <div className="grid gap-3">
            <div className="w-full flex items-center gap-2">
              <Label htmlFor="outer_shadow_factor">
                {t(
                  "site_visit_details.shadow_factors.outer_shadow_factor.label"
                )}
              </Label>
              <InfoTooltip
                content={t(
                  "site_visit_details.shadow_factors.outer_shadow_factor.info_text"
                )}
              />
            </div>
            <Combobox
              id="outer_shadow_factor"
              aria-label={t(
                "site_visit_details.shadow_factors.outer_shadow_factor.placeholder"
              )}
              placeholder={t(
                "site_visit_details.shadow_factors.outer_shadow_factor.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.shadow_factors.outer_shadow_factor.searchPlaceholder"
              )}
              options={[
                {
                  value: "outer_shadow_factor_1",
                  label: "Outer Shadow Factor 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="outer_shadow_factor_notes">
              {t(
                "site_visit_details.shadow_factors.outer_shadow_factor_notes.label"
              )}
            </Label>
            <Textarea
              id="outer_shadow_factor_notes"
              placeholder={t(
                "site_visit_details.shadow_factors.outer_shadow_factor_notes.label"
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShadowFactors;
