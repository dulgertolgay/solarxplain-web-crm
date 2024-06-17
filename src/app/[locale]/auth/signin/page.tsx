import Link from "next/link";
import { Trans } from "react-i18next";
import initTranslations from "@/app/i18n";

import TranslationsProvider from "@/components/translation-provider";
import UserSignInForm from "./components/user-sign-in-form";

const i18nNamespaces = ["signin", "auth"];

const SignIn = async ({
  params: { locale },
}: Readonly<{
  params: {
    locale: string;
  };
}>) => {
  const { t, resources, i18n } = await initTranslations(locale, i18nNamespaces);
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
        <UserSignInForm />
        <div className="mt-4 text-center text-sm text-muted-foreground">
          {t("dontHaveAccount")}{" "}
          <Link
            href="/auth/signup"
            className="underline underline-offset-4 hover:text-primary"
          >
            {t("signup")}
          </Link>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          {/* TODO: fix interpolation <Trans
            i18nKey="auth:terms"
            t={t}
            i18n={i18n}
            components={{
              termsLink: <LinkText href="/terms" />,
              privacyLink: <LinkText href="/privacy-policy" />,
            }}
          /> */}
        </p>
      </div>
    </TranslationsProvider>
  );
};

export default SignIn;
