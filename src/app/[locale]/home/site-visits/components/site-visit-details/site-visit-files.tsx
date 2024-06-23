"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

import { Upload } from "lucide-react";
import FilePlaceholder from "images/placeholders/file-upload.svg";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SiteVisitFilesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SiteVisitFiles = ({ className }: SiteVisitFilesProps) => {
  const { t } = useTranslation();

  return (
    <Card
      className={cn(
        "grid auto-rows-max items-start overflow-hidden",
        className
      )}
    >
      <CardHeader>
        <CardTitle>{t("site_visit_details.site_visit_files.title")}</CardTitle>
        <CardDescription>
          {t("site_visit_details.site_visit_files.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            src={FilePlaceholder}
            height="300"
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                src={FilePlaceholder}
                height="84"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                src={FilePlaceholder}
                height="84"
                width="84"
              />
            </button>
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">
                {t("site_visit_details.site_visit_files.upload")}
              </span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiteVisitFiles;
