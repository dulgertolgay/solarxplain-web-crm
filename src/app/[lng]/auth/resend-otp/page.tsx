import Link from "next/link";

import ResendOtpForm from "./components/resend-otp-form";

const SignIn = ({
  params: { lng },
}: Readonly<{
  params: {
    lng: string;
  };
}>) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Resend Email</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to resend the verification email.
        </p>
      </div>
      <ResendOtpForm />
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <Link
          href="/auth/verify"
          className="underline underline-offset-4 hover:text-primary"
        >
          Back to verify email
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
