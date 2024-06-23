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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";

interface StructuralFeaturesFormProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const StructuralFeaturesForm = ({ className }: StructuralFeaturesFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    structure_type: "",
    purlin_type: "",
    coating_type: "",
    direction: "",
    slope: 0,
    parapet_type: "",
    parapet_height: 0,
    ridge_top_size: 0,
    purlin_distance: 0,
    pitch_width: 0,
    distance_between_pitches: 0,
    renewal_requirement: "",
    building_height: 0,
    lifeline_connection_possibility: "",
    lightning_clearance: "",
    notes: "",
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
          {t("site_visit_details.structural_features.title")}
        </CardTitle>
        <CardDescription>
          {t("site_visit_details.structural_features.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="structure_type">
              {t("site_visit_details.structural_features.structure_type.label")}
            </Label>
            <Combobox
              id="structure_type"
              aria-label={t(
                "site_visit_details.structural_features.structure_type.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.structure_type.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.structure_type.searchPlaceholder"
              )}
              options={[
                { value: "structure_type_1", label: "Structure Type 1" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="purlin_type">
              {t("site_visit_details.structural_features.purlin_type.label")}
            </Label>
            <Combobox
              id="purlin_type"
              aria-label={t(
                "site_visit_details.structural_features.purlin_type.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.purlin_type.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.purlin_type.searchPlaceholder"
              )}
              options={[{ value: "purlin_type_1", label: "Purlin Type 1" }]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="coating_type">
              {t("site_visit_details.structural_features.coating_type.label")}
            </Label>
            <Combobox
              id="coating_type"
              aria-label={t(
                "site_visit_details.structural_features.coating_type.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.coating_type.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.coating_type.searchPlaceholder"
              )}
              options={[{ value: "coating_type_1", label: "Coating Type 1" }]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="direction">
              {t("site_visit_details.structural_features.direction.label")}
            </Label>
            <Combobox
              id="direction"
              aria-label={t(
                "site_visit_details.structural_features.direction.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.direction.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.direction.searchPlaceholder"
              )}
              options={[{ value: "direction_1", label: "Direction 1" }]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="slope">
              {t("site_visit_details.structural_features.slope.label")}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="slope"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.slope.placeholder"
                )}
              />
              <span className="text-sm">
                {t("site_visit_details.structural_features.slope.unit")}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="parapet_type">
              {t("site_visit_details.structural_features.parapet_type.label")}
            </Label>
            <Combobox
              id="parapet_type"
              aria-label={t(
                "site_visit_details.structural_features.parapet_type.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.parapet_type.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.parapet_type.searchPlaceholder"
              )}
              options={[{ value: "parapet_type_1", label: "Parapet Type 1" }]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="parapet_height">
              {t("site_visit_details.structural_features.parapet_height.label")}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="parapet_height"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.parapet_height.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.structural_features.parapet_height.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="ridge_top_size">
              {t("site_visit_details.structural_features.ridge_top_size.label")}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="ridge_top_size"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.ridge_top_size.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.structural_features.ridge_top_size.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="purlin_distance">
              {t(
                "site_visit_details.structural_features.purlin_distance.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="purlin_distance"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.purlin_distance.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.structural_features.purlin_distance.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="pitch_width">
              {t("site_visit_details.structural_features.pitch_width.label")}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="pitch_width"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.pitch_width.placeholder"
                )}
              />
              <span className="text-sm">
                {t("site_visit_details.structural_features.pitch_width.unit")}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="distance_between_pitches">
              {t(
                "site_visit_details.structural_features.distance_between_pitches.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="distance_between_pitches"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.distance_between_pitches.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.structural_features.distance_between_pitches.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="renewal_requirement">
              {t(
                "site_visit_details.structural_features.renewal_requirement.label"
              )}
            </Label>
            <Combobox
              id="renewal_requirement"
              aria-label={t(
                "site_visit_details.structural_features.renewal_requirement.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.renewal_requirement.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.renewal_requirement.searchPlaceholder"
              )}
              options={[
                {
                  value: "renewal_requirement_1",
                  label: "Renewal Requirement 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="building_height">
              {t(
                "site_visit_details.structural_features.building_height.label"
              )}
            </Label>
            <div className="w-full flex items-center gap-2">
              <Input
                id="building_height"
                type="number"
                placeholder={t(
                  "site_visit_details.structural_features.building_height.placeholder"
                )}
              />
              <span className="text-sm">
                {t(
                  "site_visit_details.structural_features.building_height.unit"
                )}
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lifeline_connection_possibility">
              {t(
                "site_visit_details.structural_features.lifeline_connection_possibility.label"
              )}
            </Label>
            <Combobox
              id="lifeline_connection_possibility"
              aria-label={t(
                "site_visit_details.structural_features.lifeline_connection_possibility.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.lifeline_connection_possibility.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.lifeline_connection_possibility.searchPlaceholder"
              )}
              options={[
                {
                  value: "lifeline_connection_possibility_1",
                  label: "Lifeline Connection Possibility 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lightning_clearance">
              {t(
                "site_visit_details.structural_features.lightning_clearance.label"
              )}
            </Label>
            <Combobox
              id="lightning_clearance"
              aria-label={t(
                "site_visit_details.structural_features.lightning_clearance.placeholder"
              )}
              placeholder={t(
                "site_visit_details.structural_features.lightning_clearance.placeholder"
              )}
              searchPlaceholder={t(
                "site_visit_details.structural_features.lightning_clearance.searchPlaceholder"
              )}
              options={[
                {
                  value: "lightning_clearance_1",
                  label: "Lightning Clearance 1",
                },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="notes">
              {t("site_visit_details.structural_features.notes.label")}
            </Label>
            <Textarea
              id="notes"
              placeholder={t(
                "site_visit_details.structural_features.notes.label"
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StructuralFeaturesForm;
