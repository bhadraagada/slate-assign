import Navbar from "@/components/Navbar";
import { SideBar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className=" w-screen  ">
        <div className="flex w-full h-full bg-[#fafafa]">
          <div className=" fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
            <SideBar />
          </div>
          <div className="lg:pl-[272px] flex w-full">
            <div className="w-full h-full">
              <Navbar />
              <main className="h-screen py-8 px-6 flex flex-col">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
