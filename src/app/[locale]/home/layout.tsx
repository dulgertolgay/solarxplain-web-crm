import Header from "@/components/header";
import SideNav from "@/components/side-nav";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <SideNav />
      <div className="flex flex-col w-full">
        <Header />
        <div className="overflow-auto h-full space-y-4 p-8 bg-[var(--secondary-bg)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
