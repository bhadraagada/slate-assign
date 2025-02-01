"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  // Simple "protection": if no user, redirect to login
  useEffect(() => {
    if (!user) {
      router.push("/sign-up");
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading state
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hiiiiiiiiiiiiii
    </div>
  );
}
