"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoaderCircle } from "lucide-react";

interface UserSignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface FormData {
  name: string;
  email: string;
  company: string;
  companyWebsite: string;
  password: string;
}

const UserSignUpForm = ({ className, ...props }: UserSignUpFormProps) => {
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
      router.push("/auth/verify");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name*</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company Name*</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Corporation"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="companyWebsite">Company Website*</Label>
            <Input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              placeholder="acmecorp.com"
              required
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password*</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserSignUpForm;
