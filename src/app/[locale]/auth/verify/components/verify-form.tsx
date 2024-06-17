"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { LoaderCircle } from "lucide-react";

interface VerifyFormProps extends React.HTMLAttributes<HTMLDivElement> {
  locale: string;
}

const VerifyForm = ({ className, ...props }: VerifyFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(value);

    setTimeout(() => {
      setIsLoading(false);
      if (value === "123456") router.push("/home/dashboard");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="w-full justify-center">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" asChild>
              <Link href="/auth/resend-otp">{t("form.resend")}</Link>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
              )}
              {t("form.verifyEmail")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyForm;
