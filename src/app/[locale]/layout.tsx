import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "solarXplain",
  description: "solarXplain is a solar energy project monitoring platform.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
