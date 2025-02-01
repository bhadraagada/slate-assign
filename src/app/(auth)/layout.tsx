"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto  px-20 py-5 bg-[#FAFAFA] border-b border-gray-200">
        <nav className="flex justify-between items-center ">
          <Image src={"/logo.svg"} alt="logo" height={75} width={75} />
          <Button asChild variant={"outline"}>
            <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
