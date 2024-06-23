import initTranslations from "@/app/i18n";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import { siteVisitSchema, SiteVisit } from "../constants/types";

import TranslationsProvider from "@/components/translation-provider";
import { Button } from "@/components/ui/button";
import SiteVisitDetailMainForm from "../components/site-visit-details/main-form";
import SiteVisitFiles from "../components/site-visit-details/site-visit-files";
import StructuralFeaturesForm from "../components/site-visit-details/structural-features";
import ShadowFactors from "../components/site-visit-details/shadow-factors";
import ElectricalConnectionFeatures from "../components/site-visit-details/electrical_connection_features";

const i18nNamespaces = ["site-visits", "translations"];

const getSiteVisits = async (id: string): Promise<SiteVisit> => {
  // TODO: Fetch site visit by id
  const siteVisit = {
    id: id,
    project_no: 1,
    project_name: "Example Project",
    district: "Maltepe",
    province: "İstanbul",
    address: "Example Address",
    employee_in_charge: {
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "1234567890",
    },
    subcontractor: "Example Subcontractor",
    site_visit_date: "2020-01-01",
  };
  return siteVisitSchema.parse(siteVisit);
};

const ProjectDetails = async ({
  params: { locale, id },
}: Readonly<{
  params: { locale: string; id: string };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const siteVisit = await getSiteVisits(id);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="mx-auto lg:max-w-[60rem] grid flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Link href="/home/site-visits">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">{t("site_visit_details.back")}</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {siteVisit.project_name} {t("site_visit_details.title")}
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              {t("site_visit_details.discard")}
            </Button>
            <Button size="sm">{t("site_visit_details.save")}</Button>
          </div>
        </div>
        <div className="grid gap-4 lg:gap-8">
          <div className="grid gap-4 lg:grid-cols-3">
            <SiteVisitDetailMainForm className="col-span-2" />
            <SiteVisitFiles />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <StructuralFeaturesForm />
            <div className="grid gap-4">
              <ShadowFactors />
              <ElectricalConnectionFeatures />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            {t("site_visit_details.discard")}
          </Button>
          <Button size="sm"> {t("site_visit_details.save")}</Button>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ProjectDetails;
