import initTranslations from "@/app/i18n";
import { z } from "zod";
import { customerSchema } from "./constants/types";

import TranslationsProvider from "@/components/translation-provider";
import { columns } from "./components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";

const i18nNamespaces = ["customers", "translations"];

const getCustomers = async () => {
  const customers = [
    {
      id: "1",
      customerType: "residential",
      name: "Tolgay Dülger",
      district: "Maltepe",
      province: "İstanbul",
      address: "",
      representative: "Burak Seçer",
      email: "customer@email.com",
      phone: "0500000000",
      manager: "Can Özparlak",
      referrer: "",
    },
  ];

  return z.array(customerSchema).parse(customers);
};

const Customers = async ({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const customers = await getCustomers();

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="hidden h-full flex-1 flex-col space-y-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Customers</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your customers!
            </p>
          </div>
        </div>
        <DataTable data={customers} columns={columns} />
      </div>
    </TranslationsProvider>
  );
};

export default Customers;
