"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const signup = useAuthStore((state) => state.signup);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"Parent" | "Admin" | "School" | "Student">();
  const [error, setError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please select a role");
      return;
    }

    const success = signup(name, email, password, role);
    if (!success) {
      setError("User already exists! Please log in instead.");
      return;
    }
    router.push("/");
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 border rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <Input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label className="block mb-1 text-sm font-medium">Password</label>
          <Input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Select value={role} onValueChange={(value: "Parent" | "Admin" | "School" | "Student") => setRole(value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Roles</SelectLabel>
                <SelectSeparator />
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="School">School</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Parent">Parent</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </Button>
      </form>
      <div className="mt-4 text-sm">
        Already have an account?{" "}
        <a href="/sign-in" className="text-blue-600 underline">
          Login here
        </a>
      </div>
    </div>
  );
}
