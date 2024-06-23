import initTranslations from "@/app/i18n";

import { ChevronLeft, Info } from "lucide-react";
import { projectSchema, Project } from "../constants/types";

import Link from "next/link";
import TranslationsProvider from "@/components/translation-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Combobox } from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoTooltip } from "@/components/common/info-tooltip";

const i18nNamespaces = ["projects", "translations"];

const getProject = async (id: string): Promise<Project> => {
  // TODO: Fetch project by id
  const project = {
    id: "1",
    project_no: 1,
    project_name: "Example Project",
    district: "Maltepe",
    province: "İstanbul",
    dc_power: 100,
    ac_power: 80,
    site_visit_status: 1,
    offer_status: 2,
    project_status: 0,
  };
  return projectSchema.parse(project);
};

const ProjectDetails = async ({
  params: { locale, id },
}: Readonly<{
  params: { locale: string; id: string };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const project = await getProject(id);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="mx-auto grid flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Link href="/home/projects">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">{t("project_details.back")}</span>
            </Button>
          </Link>
          <Input
            id="project_name"
            type="text"
            className="max-w-[200px] text-ellipsis overflow-hidden border-none shadow-none whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0"
            placeholder={t(
              "project_details.details_form.project_name.placeholder"
            )}
            defaultValue={
              project.project_name ||
              t("project_details.details_form.project_name.placeholder")
            }
          />
          <Badge variant="outline" className="ml-auto sm:ml-0">
            {t(
              `table.toolbar.projectStatuses.options.${
                project.project_status === 0 ? "active" : "inactive"
              }`
            )}
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              {t("project_details.discard")}
            </Button>
            <Button size="sm">{t("project_details.save")}</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          <div className="grid gap-4 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>
                    {t("project_details.location_form.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("project_details.location_form.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <div className="grid gap-3">
                        <Label htmlFor="project_facility">
                          {t("project_details.location_form.facility.label")}
                        </Label>
                        <Combobox
                          id="facility"
                          aria-label={t(
                            "project_details.location_form.facility.placeholder"
                          )}
                          placeholder={t(
                            "project_details.location_form.facility.placeholder"
                          )}
                          searchPlaceholder={t(
                            "project_details.location_form.facility.searchPlaceholder"
                          )}
                          options={[
                            { value: "facility_1", label: "Facility 1" },
                          ]}
                        />
                      </div>
                      {/* <div className="grid gap-3">
                      <Label htmlFor="construction_site">
                        {t(
                          "project_details.location_form.construction_site.label"
                        )}
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="construction_site"
                          aria-label={t(
                            "project_details.location_form.construction_site.placeholder"
                          )}
                        >
                          <SelectValue
                            placeholder={t(
                              "project_details.location_form.construction_site.placeholder"
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction_site_1">
                            Construction Site 1
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="grid gap-3">
                        <Label htmlFor="district">
                          {t("project_details.location_form.district.label")}
                        </Label>
                        <Combobox
                          id="district"
                          aria-label={t(
                            "project_details.location_form.district.placeholder"
                          )}
                          placeholder={t(
                            "project_details.location_form.district.placeholder"
                          )}
                          searchPlaceholder={t(
                            "project_details.location_form.district.searchPlaceholder"
                          )}
                          options={[
                            { value: "district_1", label: "District 1" },
                          ]}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="province">
                          {t("project_details.location_form.province.label")}
                        </Label>
                        <Combobox
                          id="province"
                          aria-label={t(
                            "project_details.location_form.province.placeholder"
                          )}
                          placeholder={t(
                            "project_details.location_form.province.placeholder"
                          )}
                          searchPlaceholder={t(
                            "project_details.location_form.province.searchPlaceholder"
                          )}
                          options={[
                            { value: "province_1", label: "Province 1" },
                          ]}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="neighborhood">
                          {t(
                            "project_details.location_form.neighborhood.label"
                          )}
                        </Label>
                        <Combobox
                          id="neighborhood"
                          aria-label={t(
                            "project_details.location_form.neighborhood.placeholder"
                          )}
                          placeholder={t(
                            "project_details.location_form.neighborhood.placeholder"
                          )}
                          searchPlaceholder={t(
                            "project_details.location_form.neighborhood.searchPlaceholder"
                          )}
                          options={[
                            {
                              value: "neighborhood_1",
                              label: "Neighborhood 1",
                            },
                          ]}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid gap-3">
                        <Label htmlFor="block_number">
                          {t(
                            "project_details.location_form.block_number.label"
                          )}
                        </Label>
                        <Input
                          id="block_number"
                          type="number"
                          placeholder={t(
                            "project_details.location_form.block_number.placeholder"
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="plot_number">
                          {t("project_details.location_form.plot_number.label")}
                        </Label>
                        <Input
                          id="plot_number"
                          type="number"
                          placeholder={t(
                            "project_details.location_form.plot_number.placeholder"
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid gap-3">
                        <Label htmlFor="latitude">
                          {t("project_details.location_form.latitude.label")}
                        </Label>
                        <Input
                          id="latitude"
                          type="number"
                          placeholder={t(
                            "project_details.location_form.latitude.placeholder"
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="longitude">
                          {t("project_details.location_form.longitude.label")}
                        </Label>
                        <Input
                          id="longitude"
                          type="number"
                          placeholder={t(
                            "project_details.location_form.longitude.placeholder"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("project_details.additional_info.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("project_details.additional_info.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid gap-3">
                        <Label htmlFor="application_status">
                          {t(
                            "project_details.additional_info.application_status.label"
                          )}
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="status"
                            aria-label={t(
                              "project_details.additional_info.application_status.placeholder"
                            )}
                          >
                            <SelectValue
                              placeholder={t(
                                "project_details.additional_info.application_status.placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="application_status_1">
                              Waiting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="investment_incentive">
                          {t(
                            "project_details.additional_info.investment_incentive.label"
                          )}
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="status"
                            aria-label={t(
                              "project_details.additional_info.investment_incentive.placeholder"
                            )}
                          >
                            <SelectValue
                              placeholder={t(
                                "project_details.additional_info.investment_incentive.placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="investment_incentive_1">
                              Yes
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="notes">
                        {t("project_details.additional_info.notes.label")}
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder={t(
                          "project_details.additional_info.notes.placeholder"
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("project_details.details_form.title")}</CardTitle>
                <CardDescription>
                  {t("project_details.details_form.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="regulation_article">
                      {t(
                        "project_details.details_form.regulation_article.label"
                      )}
                    </Label>
                    <Combobox
                      id="regulation_article"
                      aria-label={t(
                        "project_details.details_form.regulation_article.placeholder"
                      )}
                      placeholder={t(
                        "project_details.details_form.regulation_article.placeholder"
                      )}
                      searchPlaceholder={t(
                        "project_details.details_form.regulation_article.searchPlaceholder"
                      )}
                      options={[
                        {
                          value: "regulation_article_1",
                          label: "Article 1",
                        },
                      ]}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="connection_level">
                      {t("project_details.details_form.connection_level.label")}
                    </Label>
                    <Combobox
                      id="connection_level"
                      aria-label={t(
                        "project_details.details_form.connection_level.placeholder"
                      )}
                      placeholder={t(
                        "project_details.details_form.connection_level.placeholder"
                      )}
                      searchPlaceholder={t(
                        "project_details.details_form.connection_level.searchPlaceholder"
                      )}
                      options={[
                        {
                          value: "connection_level_1",
                          label: "Level 1",
                        },
                      ]}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-3">
                      <Label htmlFor="subscription_type">
                        {t(
                          "project_details.details_form.subscription_type.label"
                        )}
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="status"
                          aria-label={t(
                            "project_details.details_form.subscription_type.placeholder"
                          )}
                        >
                          <SelectValue
                            placeholder={t(
                              "project_details.details_form.subscription_type.placeholder"
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="subscription_type_1">
                            Subscription 1
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="subscription_group">
                        {t(
                          "project_details.details_form.subscription_group.label"
                        )}
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="status"
                          aria-label={t(
                            "project_details.details_form.subscription_group.placeholder"
                          )}
                        >
                          <SelectValue
                            placeholder={t(
                              "project_details.details_form.subscription_group.placeholder"
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="subscription_group_1">
                            Group 1
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="distribution_company">
                      {t(
                        "project_details.details_form.distribution_company.label"
                      )}
                    </Label>
                    <Combobox
                      id="distribution_company"
                      aria-label={t(
                        "project_details.details_form.distribution_company.placeholder"
                      )}
                      placeholder={t(
                        "project_details.details_form.distribution_company.placeholder"
                      )}
                      searchPlaceholder={t(
                        "project_details.details_form.distribution_company.searchPlaceholder"
                      )}
                      options={[
                        {
                          value: "distribution_company_1",
                          label: "Article 1",
                        },
                      ]}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="power">
                      {t("project_details.details_form.power.label")}
                    </Label>
                    <div className="w-full flex items-center gap-2">
                      <Input
                        id="power"
                        type="number"
                        placeholder={t(
                          "project_details.details_form.power.placeholder"
                        )}
                      />
                      <span className="text-sm">
                        {t("project_details.details_form.power.unit")}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="w-full flex items-center gap-2">
                      <Label htmlFor="installation_start_date">
                        {t(
                          "project_details.details_form.installation_start_date.label"
                        )}
                      </Label>
                      <InfoTooltip
                        content={t(
                          "project_details.details_form.installation_start_date.helperText"
                        )}
                      />
                    </div>
                    <DatePicker
                      id="installation_start_date"
                      placeholder={t(
                        "project_details.details_form.installation_start_date.placeholder"
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            {t("project_details.discard")}
          </Button>
          <Button size="sm"> {t("project_details.save")}</Button>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ProjectDetails;
