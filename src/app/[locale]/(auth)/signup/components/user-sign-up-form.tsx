"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface UserSignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface FormData {
  name: string;
  email: string;
  company: string;
  companyWebsite: string;
  password: string;
}

const UserSignUpForm = ({ className, ...props }: UserSignUpFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    companyWebsite: "",
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
      router.push("/verify");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">{t("auth:form.name.label")}*</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t("auth:form.name.placeholder")}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
            <Label htmlFor="company">{t("form.companyName.label")}*</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder={t("form.companyName.placeholder")}
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="companyWebsite">
              {t("form.companyWebsite.label")}*
            </Label>
            <Input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              placeholder={t("form.companyWebsite.placeholder")}
              required
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t("auth:form.password.label")}*</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t("auth:form.password.placeholder")}
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            )}
            {t("form.signup")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserSignUpForm;
