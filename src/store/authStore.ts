import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  password: string;
  role: "Admin" | "School" | "Student" | "Parent";
}

interface AuthState {
  user: User | null;
  registeredUsers: User[];
  signup: (
    name: string,
    email: string,
    password: string,
    role: "Admin" | "School" | "Student" | "Parent"
  ) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      registeredUsers: [],

      signup: (name, email, password, role) => {
        const { registeredUsers } = get();
        const existingUser = registeredUsers.find((u) => u.email === email);
        if (existingUser) {
          return false;
        }
        const newUser = { name, email, password, role };
        set({
          registeredUsers: [...registeredUsers, newUser],
          user: newUser,
        });
        return true;
      },

      login: (email, password) => {
        const { registeredUsers } = get();
        const match = registeredUsers.find(
          (u) => u.email === email && u.password === password
        );
        if (match) {
          set({ user: match });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null });
        window.location.href = "/sign-in";
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
