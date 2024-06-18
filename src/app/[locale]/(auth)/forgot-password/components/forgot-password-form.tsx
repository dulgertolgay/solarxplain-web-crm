"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ForgotPasswordFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}
interface FormData {
  email: string;
}

const ForgotPasswordForm = ({
  className,
  ...props
}: ForgotPasswordFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormData>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(formData);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/signin");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t("auth:form.email.label")}*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("auth:form.email.placeholder")}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            )}
            {t("resetPassword")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
