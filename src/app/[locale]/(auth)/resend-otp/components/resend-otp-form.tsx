"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ResendOtpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const ResendOtpForm = ({ className, ...props }: ResendOtpFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(email);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/verify");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">{t("auth:form.email.label")}*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("auth:form.email.placeholder")}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            )}
            {t("resendCode")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResendOtpForm;
