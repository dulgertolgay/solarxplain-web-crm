"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoaderCircle } from "lucide-react";

interface UserSignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface FormData {
  email: string;
  password: string;
}

const UserSignInForm = ({ className, ...props }: UserSignInFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormData>({
    email: "",
    password: "",
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
      router.push("/home/dashboard");
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
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">{t("auth:form.password.label")}*</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                {t("form.forgotPassword")}
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            )}
            {t("form.signIn")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserSignInForm;
