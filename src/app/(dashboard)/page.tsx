"use client";

import AdminDashboard from "@/components/admin-dashboard";
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
    <div className="size-full">
      <AdminDashboard />
    </div>
  );
}
