import Link from "next/link";
import initTranslations from "@/app/i18n";

import TranslationsProvider from "@/components/translation-provider";
import ForgotPasswordForm from "./components/forgot-password-form";

const i18nNamespaces = ["forgot-password", "auth"];

const ForgotPassword = async ({
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
        <ForgotPasswordForm />
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <Link
            href="/signin"
            className="underline underline-offset-4 hover:text-primary"
          >
            {t("backToSignIn")}
          </Link>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ForgotPassword;
