"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";

import {
  Calendar,
  GraduationCap,
  Home,
  Search,
  Settings,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const generalItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

const adminItems = [
  { title: "Admin Dashboard", url: "/", icon: Shield },
  { title: "School Dashboard", url: "/school", icon: GraduationCap },
  { title: "Parent Dashboard", url: "/parent", icon: Users },
  { title: "Student Dashboard", url: "/student", icon: UserCheck },
];

const schoolItems = [
  { title: "School Dashboard", url: "/school", icon: GraduationCap },
];

const parentItems = [
  { title: "Parent Dashboard", url: "/parent", icon: Users },
];

const studentItems = [
  { title: "Student Dashboard", url: "/student", icon: UserCheck },
];

export function SideBar() {
  const role = useAuthStore((state) => state.user?.role);

  interface MenuItem {
    title: string;
    url: string;
    icon: React.ComponentType;
  }

  let roleItems: MenuItem[] = [];
  if (role === "Admin") {
    roleItems = adminItems;
    // setValue("admin");
  } else if (role === "School") {
    roleItems = schoolItems;
    // setValue("school");
  } else if (role === "Parent") {
    roleItems = parentItems;
    // setValue("parent");
  } else if (role === "Student") {
    roleItems = studentItems;
    // setValue("student");
  }

  return (
    <Sidebar className="hidden md:flex md:w-64 border-r border-gray-200 bg-white ml-4 mt-4">
      <SidebarContent>
        <Image src="/logo.svg" alt="Logo" width={100} height={50} />
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {role && roleItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-4">
              {role} Section
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {roleItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <div className="flex items-center space-x-2">
                          <div className="size-4 flex justify-center items-center">
                            <item.icon />
                          </div>
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
