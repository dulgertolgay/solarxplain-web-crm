import Link from "next/link";

import ForgotPasswordForm from "./components/forgot-password-form";

const ForgotPassword = ({
  params: { lng },
}: Readonly<{
  params: {
    lng: string;
  };
}>) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset your password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to receive reset email
        </p>
      </div>
      <ForgotPasswordForm />
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <Link
          href="/auth/signin"
          className="underline underline-offset-4 hover:text-primary"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
