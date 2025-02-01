"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Attempt login
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password. Please try again.");
      return;
    }
    // If login is successful, redirect to a "protected" route or home
    router.push("/dashboard");
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 border rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {user && <p className="text-green-600">You are already logged in.</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <Input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label className="block mb-1 text-sm font-medium">Password</Label>
          <Input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </Button>
      </form>
      <div className="mt-4 text-sm">
        Don’t have an account?{" "}
        <a href="/sign-up" className="text-blue-600 underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
