import initTranslations from "@/app/i18n";
import { z } from "zod";
import { projectSchema } from "./constants/types";

import TranslationsProvider from "@/components/translation-provider";
import ProjectsDataTable from "./components/data-table/data-table";

const i18nNamespaces = ["projects", "translations"];

const getProjects = async () => {
  const projects = [
    {
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
    },
  ];

  return z.array(projectSchema).parse(projects);
};

const Projects = async ({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const projects = await getProjects();

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
        <ProjectsDataTable projects={projects} />
      </div>
    </TranslationsProvider>
  );
};

export default Projects;
