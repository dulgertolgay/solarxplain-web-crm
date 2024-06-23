import initTranslations from "@/app/i18n";
import { z } from "zod";
import { siteVisitSchema } from "./constants/types";

import TranslationsProvider from "@/components/translation-provider";
import SiteVisitsDataTable from "./components/data-table/data-table";

const i18nNamespaces = ["site-visits", "translations"];

const getSiteVisits = async () => {
  const siteVisits = [
    {
      id: "1",
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
    },
  ];

  return z.array(siteVisitSchema).parse(siteVisits);
};

const SiteVisits = async ({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const siteVisits = await getSiteVisits();

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="hidden h-full flex-1 flex-col space-y-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
            <p className="text-muted-foreground">{t("desc")}</p>
          </div>
        </div>
        <SiteVisitsDataTable siteVisits={siteVisits} />
      </div>
    </TranslationsProvider>
  );
};

export default SiteVisits;
