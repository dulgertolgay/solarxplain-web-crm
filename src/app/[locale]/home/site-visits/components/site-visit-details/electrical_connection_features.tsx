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

interface ElectricalConnectionFeaturesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ElectricalConnectionFeatures = ({
  className,
}: ElectricalConnectionFeaturesProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    inverter_location: "",
    roof_descent: "",
    pv_inverter_distance: 0,
    inverter_panel_distance: 0,
    connection_panel: "",
    tms_current_value: 0,
    connection_cable_cross_section: 0,
    generator_status: "",
    transformer_status: "",
    transformer_type: "",
    transformer_power: 0,
    number_of_panels: 0,
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
        <CardTitle>
          {t("site_visit_details.electrical_connection_features.title")}
        </CardTitle>
        <CardDescription>
          {t("site_visit_details.electrical_connection_features.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="inverter_location">
              {t(
                "site_visit_details.electrical_connection_features.inverter_location.label"
              )}
            </Label>
            <Combobox
              id="inverter_location"
              aria-label={t(
                "site_visit_details.electrical_connection_features.inverter_location.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.inverter_location.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.inverter_location.searchPlaceholder"
              )}
              options={[
                { value: "inverter_location_1", label: "Inverter Locations 1" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="roof_descent">
              {t(
                "site_visit_details.electrical_connection_features.roof_descent.label"
              )}
            </Label>
            <Combobox
              id="roof_descent"
              aria-label={t(
                "site_visit_details.electrical_connection_features.roof_descent.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.roof_descent.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.roof_descent.searchPlaceholder"
              )}
              options={[{ value: "roof_descent_1", label: "Roof Descent 1" }]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="pv_inverter_distance">
              {t(
                "site_visit_details.electrical_connection_features.pv_inverter_distance.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="pv_inverter_distance"
                type="number"
                placeholder={t(
                  "site_visit_details.electrical_connection_features.pv_inverter_distance.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.electrical_connection_features.pv_inverter_distance.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="inverter_panel_distance">
              {t(
                "site_visit_details.electrical_connection_features.inverter_panel_distance.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="inverter_panel_distance"
                type="number"
                placeholder={t(
                  "site_visit_details.electrical_connection_features.inverter_panel_distance.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.electrical_connection_features.inverter_panel_distance.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="connection_panel">
              {t(
                "site_visit_details.electrical_connection_features.connection_panel.label"
              )}
            </Label>
            <Combobox
              id="connection_panel"
              aria-label={t(
                "site_visit_details.electrical_connection_features.connection_panel.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.connection_panel.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.connection_panel.searchPlaceholder"
              )}
              options={[
                { value: "connection_panel_1", label: "Connection Panel 1" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tms_current_value">
              {t(
                "site_visit_details.electrical_connection_features.tms_current_value.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="tms_current_value"
                type="number"
                placeholder={t(
                  "site_visit_details.electrical_connection_features.tms_current_value.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.electrical_connection_features.tms_current_value.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="connection_cable_cross_section">
              {t(
                "site_visit_details.electrical_connection_features.connection_cable_cross_section.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="connection_cable_cross_section"
                type="number"
                placeholder={t(
                  "site_visit_details.electrical_connection_features.connection_cable_cross_section.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.electrical_connection_features.connection_cable_cross_section.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="generator_status">
              {t(
                "site_visit_details.electrical_connection_features.generator_status.label"
              )}
            </Label>
            <Combobox
              id="generator_status"
              aria-label={t(
                "site_visit_details.electrical_connection_features.generator_status.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.generator_status.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.generator_status.searchPlaceholder"
              )}
              options={[
                { value: "generator_status_1", label: "Generator Status 1" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="transformer_status">
              {t(
                "site_visit_details.electrical_connection_features.transformer_status.label"
              )}
            </Label>
            <Combobox
              id="transformer_status"
              aria-label={t(
                "site_visit_details.electrical_connection_features.transformer_status.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.transformer_status.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.transformer_status.searchPlaceholder"
              )}
              options={[
                {
                  value: "transformer_status_1",
                  label: "Transformer Status 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="transformer_type">
              {t(
                "site_visit_details.electrical_connection_features.transformer_type.label"
              )}
            </Label>
            <Combobox
              id="transformer_type"
              aria-label={t(
                "site_visit_details.electrical_connection_features.transformer_type.placeholder"
              )}
              placeholder={t(
                "site_visit_details.electrical_connection_features.transformer_type.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.electrical_connection_features.transformer_type.searchPlaceholder"
              )}
              options={[
                { value: "transformer_type_1", label: "Transformer Type 1" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="transformer_power">
              {t(
                "site_visit_details.electrical_connection_features.transformer_power.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="transformer_power"
                type="number"
                placeholder={t(
                  "site_visit_details.electrical_connection_features.transformer_power.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.electrical_connection_features.transformer_power.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="number_of_panels">
              {t(
                "site_visit_details.electrical_connection_features.number_of_panels.label"
              )}
            </Label>
            <Input
              id="number_of_panels"
              type="number"
              placeholder={t(
                "site_visit_details.electrical_connection_features.number_of_panels.placeholder"
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ElectricalConnectionFeatures;
