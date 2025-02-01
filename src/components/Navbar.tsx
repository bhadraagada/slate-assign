"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useAuthStore } from "../store/authStore";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  console.log({ user });

  return (
    <div className="w-[100%]">
      <nav className="flex items-center justify-between gap-[100px]  p-4 shadow-md border-gray-200 bg-[#fafafa]">
        <div className="flex-1 max-w-md">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end w-52">
                <div className="flex justify-between items-center gap-1">
                  <span className="font-medium">{user.name}</span>
                  <div className="size-1 bg-muted-foreground rounded-full" />
                  <span className="font-medium capitalize text-sm">
                    {user.role}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground ">
                  {user.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-0">
                    <Button
                      onClick={logout}
                      variant={"outline"}
                      className="hover:bg-red-100 hover:text-red-500 px-4 py-2 text-sm w-full bg-transparent text-black  rounded-lg"
                    >
                      Logout
                    </Button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                className="px-4 py-2"
                onClick={() => router.push("/sign-up")}
              >
                Sign Up
              </Button>
              <Button
                className="px-4 py-2 "
                variant={"outline"}
                onClick={() => router.push("/sign-in")}
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
