import initTranslations from "@/app/i18n";

import TranslationsProvider from "@/components/translation-provider";

const i18nNamespaces = ["projects"];

const ProjectDetail = async ({
  params: { locale },
}: Readonly<{
  params: {
    locale: string;
    id: string;
  };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-sm text-muted-foreground">{t("desc")}</p>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ProjectDetail;
