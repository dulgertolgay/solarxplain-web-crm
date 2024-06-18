import initTranslations from "@/app/i18n";

import TranslationsProvider from "@/components/translation-provider";
import VerifyForm from "./components/verify-form";

const i18nNamespaces = ["verify", "auth"];

const Verify = async ({
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
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-sm text-muted-foreground">{t("desc")}</p>
        </div>
        <VerifyForm locale={locale} />
      </div>
    </TranslationsProvider>
  );
};

export default Verify;
