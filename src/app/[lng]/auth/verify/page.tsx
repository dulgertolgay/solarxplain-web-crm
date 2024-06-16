import VerifyForm from "./components/verify-form";

const Verify = ({
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
          Verify your email address
        </h1>
        <p className="text-sm text-muted-foreground">
          Check your email for a verification code we&apos;ve just sent.
        </p>
      </div>
      <VerifyForm />
    </div>
  );
};

export default Verify;
