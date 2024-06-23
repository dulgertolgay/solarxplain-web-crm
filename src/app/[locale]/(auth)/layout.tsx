import Image from "next/image";
import Logo from "images/logos/logo.svg";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container relative hidden h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
      <div className="flex item-center md:p-8">{children}</div>
    </div>
  );
};
export default AuthLayout;
