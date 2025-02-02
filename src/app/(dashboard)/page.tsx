"use client";

import AdminDashboard from "@/components/admin-dashboard";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-up");
    }

    if (user && user.role === "School") {
      router.push("/school");
    }

    if (user && user.role === "Parent") {
      router.push("/parent");
    }

    if (user && user.role === "Student") {
      router.push("/student");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="size-full">
      <AdminDashboard />
    </div>
  );
}
