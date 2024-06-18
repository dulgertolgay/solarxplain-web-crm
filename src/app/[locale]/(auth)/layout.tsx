import Image from "next/image";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translation-provider";

import Logo from "images/logos/logo.svg";

const i18nNamespaces = ["translations"];

const AuthLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
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
      <div className="flex flex-col justify-center items-center gap-6 h-screen bg-slate-100 md:hidden">
        <div className="flex justify-center items-center text-lg font-medium">
          <Image
            src={Logo}
            alt="solarXplain Logo"
            width={48}
            height={48}
            className="mr-4"
          />
          <h1 className="text-4xl">solarXplain</h1>
        </div>
        <div className="text-lg">{t("mobileError")}</div>
      </div>
      <div className="container relative hidden h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src={Logo}
              alt="solarXplain Logo"
              width={24}
              height={24}
              className="mr-2 h-6 w-6"
            />
            <span className="text-lg">solarXplain</span>
          </div>
        </div>
        <div className="flex item-center md:p-8">{children}</div>
      </div>
    </TranslationsProvider>
  );
};
export default AuthLayout;
