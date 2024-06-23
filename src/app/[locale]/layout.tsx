import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import "@/styles/globals.css";
import initTranslations from "../i18n";
import Image from "next/image";

import TranslationsProvider from "@/components/translation-provider";

import Logo from "images/logos/logo.svg";

const inter = Inter({ subsets: ["latin"] });
const i18nNamespaces = ["translations"];

export const metadata: Metadata = {
  title: "solarXplain",
  description: "solarXplain is a solar energy project monitoring platform.",
};

const RootLayout = async ({
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
    <html lang={locale} dir={dir(locale)}>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body className={inter.className}>
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
          {children}
        </body>
      </TranslationsProvider>
    </html>
  );
};

export default RootLayout;
