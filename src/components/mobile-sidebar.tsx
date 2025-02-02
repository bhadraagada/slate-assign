"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Calendar, GraduationCap, Home, MenuIcon, Search, Settings, Shield, UserCheck, Users } from "lucide-react";
import Image from "next/image";

const generalItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

const roleItemsMap = {
  Admin: [
    { title: "Admin Dashboard", url: "/", icon: Shield },
    { title: "School Dashboard", url: "/school", icon: GraduationCap },
    { title: "Parent Dashboard", url: "/parent", icon: Users },
    { title: "Student Dashboard", url: "/student", icon: UserCheck },
  ],
  School: [{ title: "School Dashboard", url: "/school", icon: GraduationCap }],
  Parent: [{ title: "Parent Dashboard", url: "/parent", icon: Users }],
  Student: [{ title: "Student Dashboard", url: "/student", icon: UserCheck }],
};

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const role = useAuthStore((state) => state.user?.role);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-64 h-full">
        <VisuallyHidden>
          <h2>Sidebar Navigation</h2>
        </VisuallyHidden>
        <div className="p-4">
          <Image src="/logo.svg" alt="Logo" width={100} height={50} />
          <nav className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Application</div>
            <ul>
              {generalItems.map((item) => (
                <li key={item.title} className="py-2">
                  <Link href={item.url} className="flex items-center space-x-2 text-gray-700">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {role && roleItemsMap[role] && (
            <nav className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">{role} Section</div>
              <ul>
                {roleItemsMap[role].map((item) => (
                  <li key={item.title} className="py-2">
                    <Link href={item.url} className="flex items-center space-x-2 text-gray-700">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
