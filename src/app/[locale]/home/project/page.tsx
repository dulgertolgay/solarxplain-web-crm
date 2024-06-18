import initTranslations from "@/app/i18n";

import TranslationsProvider from "@/components/translation-provider";

const i18nNamespaces = ["project"];

const Project = async ({
  params: { locale },
}: Readonly<{
  params: {
    locale: string;
  };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="space-y-4">
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

export default Project;
