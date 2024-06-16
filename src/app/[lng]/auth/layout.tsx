import Image from "next/image";

import Logo from "images/logos/logo.svg";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src=""
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src=""
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src={Logo}
              alt="solarXplain Logo"
              width={24}
              height={24}
              className="mr-2 h-6 w-6"
            />
            <span className="text-lg">solarXplain</span>
          </div>
        </div>
        <div className="lg:p-8">{children}</div>
      </div>
    </>
  );
};
export default AuthLayout;
